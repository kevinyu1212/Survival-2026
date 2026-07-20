export interface UserSession {
  userId: string;
  email: string;
  role: 'free' | 'pro' | 'admin';
  credits: number;
}

export interface AuthConfig {
  provider: 'supabase' | 'authjs' | 'clerk';
  apiKey?: string;
}

export class AuthManager {
  private config: AuthConfig;
  private currentSession: UserSession | null = null;

  constructor(config: AuthConfig) {
    this.config = config;
  }

  public setSession(session: UserSession): void {
    this.currentSession = session;
  }

  public getSession(): UserSession | null {
    return this.currentSession;
  }

  public isAuthenticated(): boolean {
    return this.currentSession !== null;
  }

  public isProUser(): boolean {
    return this.currentSession?.role === 'pro' || this.currentSession?.role === 'admin';
  }
}

export function createAuthManager(config: AuthConfig): AuthManager {
  return new AuthManager(config);
}
