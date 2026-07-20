"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCacheManager = createCacheManager;
function createCacheManager() {
    const store = new Map();
    return {
        set: (key, value, ttlSeconds = 60) => {
            const expiry = Date.now() + ttlSeconds * 1000;
            store.set(key, { value, expiry });
        },
        get: (key) => {
            const item = store.get(key);
            if (!item)
                return null;
            if (Date.now() > item.expiry) {
                store.delete(key);
                return null;
            }
            return item.value;
        },
        clear: () => store.clear()
    };
}
