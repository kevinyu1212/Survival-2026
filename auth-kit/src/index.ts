export interface UserSession {
  userId: string;
  email: string;
  role: "FREE" | "PRO" | "ADMIN";
}

export function verifyMockToken(token: string): UserSession | null {
  // 실무에서는 JWT 검증 로직이 들어갈 자리 (여기서는 모의 토큰 파싱)
  if (token === "bearer-pro-token") {
    return { userId: "u_001", email: "pro_user@survival.com", role: "PRO" };
  } else if (token === "bearer-free-token") {
    return { userId: "u_002", email: "free_user@survival.com", role: "FREE" };
  }
  return null;
}

export function authorizeRole(userRole: string, requiredRole: "FREE" | "PRO" | "ADMIN"): boolean {
  const hierarchy = { FREE: 1, PRO: 2, ADMIN: 3 };
  return (hierarchy[userRole as keyof typeof hierarchy] || 0) >= (hierarchy[requiredRole] || 0);
}
