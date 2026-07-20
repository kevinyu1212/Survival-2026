export function createCacheManager() {
    const store = new Map<string, { value: any; expiry: number }>();

    return {
        set: (key: string, value: any, ttlSeconds: number = 60) => {
            const expiry = Date.now() + ttlSeconds * 1000;
            store.set(key, { value, expiry });
        },
        get: (key: string) => {
            const item = store.get(key);
            if (!item) return null;
            if (Date.now() > item.expiry) {
                store.delete(key);
                return null;
            }
            return item.value;
        },
        clear: () => store.clear()
    };
}
