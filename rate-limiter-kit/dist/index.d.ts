export interface RateLimiter {
    checkLimit(identifier: string): boolean;
}
export declare function createRateLimiter(maxRequests: number, windowMs: number): RateLimiter;
