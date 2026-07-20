"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCacheManager = createCacheManager;
function createCacheManager() {
    const store = new Map();
    return {
        get(key) {
            const item = store.get(key);
            if (!item)
                return undefined;
            if (Date.now() > item.expiry) {
                store.delete(key);
                return undefined;
            }
            return item.value;
        },
        set(key, value, ttlSeconds = 60) {
            const expiry = Date.now() + ttlSeconds * 1000;
            store.set(key, { value, expiry });
        }
    };
}
