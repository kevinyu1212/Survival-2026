"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMemoryRepository = createMemoryRepository;
function createMemoryRepository() {
    const storage = new Map();
    return {
        save(id, data) {
            storage.set(id, data);
        },
        findById(id) {
            return storage.get(id);
        },
        findAll() {
            return Array.from(storage.values());
        }
    };
}
