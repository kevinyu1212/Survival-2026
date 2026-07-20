export interface Repository<T> {
    save(id: string, data: T): void;
    findById(id: string): T | undefined;
    findAll(): T[];
}
export declare function createMemoryRepository<T>(): Repository<T>;
