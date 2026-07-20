export interface Repository<T> {
  save(id: string, data: T): void;
  findById(id: string): T | undefined;
  findAll(): T[];
}

export function createMemoryRepository<T>(): Repository<T> {
  const storage = new Map<string, T>();

  return {
    save(id: string, data: T) {
      storage.set(id, data);
    },
    findById(id: string) {
      return storage.get(id);
    },
    findAll() {
      return Array.from(storage.values());
    }
  };
}
