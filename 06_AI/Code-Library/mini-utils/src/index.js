"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = exports.uniqueArray = exports.formatDate = void 0;
/**
 * 1. 날짜를 'YYYY-MM-DD' 형식으로 변환합니다.
 */
const formatDate = (date) => {
    return date.toISOString().split('T')[0];
};
exports.formatDate = formatDate;
/**
 * 2. 배열에서 중복된 값을 제거합니다.
 */
const uniqueArray = (arr) => {
    return [...new Set(arr)];
};
exports.uniqueArray = uniqueArray;
const hello = () => 'Hello from mini-utils';
exports.hello = hello;
//# sourceMappingURL=index.js.map