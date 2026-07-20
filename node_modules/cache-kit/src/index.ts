export interface CacheManager {
  get(key: string): any;
  set(key: string, value: any, ttlSeconds?: number): void;
}

export function createCacheManager(): CacheManager {
  const store = new Map<string, { value: any; expiry: number }>();

  return {
    get(key: string) {
      const item = store.get(key);
      if (!item) return undefined;
      if (Date.now() > item.expiry) {
        store.delete(key);
        return undefined;
      }
      return item.value;
    },
    set(key: string, value: any, ttlSeconds: number = 60) {
      const expiry = Date.now() + ttlSeconds * 1000;
      store.set(key, { value, expiry });
    }
  };
}
