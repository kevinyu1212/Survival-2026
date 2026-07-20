export declare function createCacheManager(): {
    set: (key: string, value: any, ttlSeconds?: number) => void;
    get: (key: string) => any;
    clear: () => void;
};
