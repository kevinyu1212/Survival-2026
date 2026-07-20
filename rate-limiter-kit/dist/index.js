"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRateLimiter = createRateLimiter;
function createRateLimiter(maxRequests, windowMs) {
    const requests = new Map();
    return {
        checkLimit(identifier) {
            const now = Date.now();
            const userTimestamps = requests.get(identifier) || [];
            // 유효 시간(windowMs) 내의 요청만 필터링
            const validTimestamps = userTimestamps.filter(t => now - t < windowMs);
            if (validTimestamps.length >= maxRequests) {
                return false; // 제한 초과
            }
            validTimestamps.push(now);
            requests.set(identifier, validTimestamps);
            return true; // 허용
        }
    };
}
