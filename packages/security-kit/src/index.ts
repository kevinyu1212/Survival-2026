export interface SecurityAuditResult {
  passed: boolean;
  issuesFound: number;
  details: string[];
}

export interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

export class SecurityKitManager {
  private requestCounts: Map<string, { count: number; resetTime: number }> = new Map();

  /**
   * 1. 환경 변수 및 설정 파일 보안 감사 스뮬레이션
   */
  public auditEnvironment(envMock: Record<string, string>): SecurityAuditResult {
    const issues: string[] = [];
    let passed = true;

    for (const [key, value] of Object.entries(envMock)) {
      if (key.includes('SECRET') || key.includes('KEY')) {
        if (value.startsWith('sk_live_')) {
          passed = false;
          issues.push(`[Critical] Live production secret key exposed in env variable: ${key}`);
        } else if (value.length < 10) {
          passed = false;
          issues.push(`[Warning] Secret key ${key} is too short or weak.`);
        }
      }
    }

    if (issues.length === 0) {
      issues.push('No security vulnerabilities found in environment configuration.');
    }

    return {
      passed,
      issuesFound: passed ? 0 : issues.filter(i => i.includes('Critical')).length,
      details: issues
    };
  }

  /**
   * 2. API 요청 레이트 리밋 (Rate Limiting) 방어 체크
   */
  public checkRateLimit(clientId: string, config: RateLimitConfig = { maxRequests: 5, windowMs: 60000 }): { allowed: boolean; remaining: number } {
    const now = Date.now();
    let record = this.requestCounts.get(clientId);

    if (!record || now > record.resetTime) {
      record = { count: 1, resetTime: now + config.windowMs };
      this.requestCounts.set(clientId, record);
      return { allowed: true, remaining: config.maxRequests - 1 };
    }

    if (record.count >= config.maxRequests) {
      return { allowed: false, remaining: 0 };
    }

    record.count++;
    return { allowed: true, remaining: config.maxRequests - record.count };
  }
}

export function createSecurityManager(): SecurityKitManager {
  return new SecurityKitManager();
}
