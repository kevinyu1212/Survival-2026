export interface CacheManager {
    get(key: string): any;
    set(key: string, value: any, ttlSeconds?: number): void;
}
export declare function createCacheManager(): CacheManager;
