"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const assert = __importStar(require("node:assert"));
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
