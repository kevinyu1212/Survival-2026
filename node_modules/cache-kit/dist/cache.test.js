"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const assert = require("node:assert");
const index_1 = require("./index");
(0, node_test_1.test)("Cache-Kit: 데이터 저장 및 조회 테스트", () => {
    const cache = (0, index_1.createCacheManager)();
    cache.set("user_tier", "PRO");
    assert.strictEqual(cache.get("user_tier"), "PRO", "캐시에서 'PRO' 값을 반환해야 합니다.");
});
(0, node_test_1.test)("Cache-Kit: TTL (만료 시간) 로직 테스트", async () => {
    const cache = (0, index_1.createCacheManager)();
    cache.set("temp_data", "123", 0.1);
    await new Promise(resolve => setTimeout(resolve, 150));
    assert.strictEqual(cache.get("temp_data"), null, "만료된 캐시는 null을 반환해야 합니다.");
});
