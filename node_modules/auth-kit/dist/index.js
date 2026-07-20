"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyMockToken = verifyMockToken;
exports.authorizeRole = authorizeRole;
function verifyMockToken(token) {
    // 실무에서는 JWT 검증 로직이 들어갈 자리 (여기서는 모의 토큰 파싱)
    if (token === "bearer-pro-token") {
        return { userId: "u_001", email: "pro_user@survival.com", role: "PRO" };
    }
    else if (token === "bearer-free-token") {
        return { userId: "u_002", email: "free_user@survival.com", role: "FREE" };
    }
    return null;
}
function authorizeRole(userRole, requiredRole) {
    const hierarchy = { FREE: 1, PRO: 2, ADMIN: 3 };
    return (hierarchy[userRole] || 0) >= (hierarchy[requiredRole] || 0);
}
