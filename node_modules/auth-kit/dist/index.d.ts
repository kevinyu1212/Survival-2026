export interface UserSession {
    userId: string;
    email: string;
    role: "FREE" | "PRO" | "ADMIN";
}
export declare function verifyMockToken(token: string): UserSession | null;
export declare function authorizeRole(userRole: string, requiredRole: "FREE" | "PRO" | "ADMIN"): boolean;
