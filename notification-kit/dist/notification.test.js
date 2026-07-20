"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const assert = require("node:assert");
const index_1 = require("./index");
(0, node_test_1.test)("Notification-Kit: 알림 발송 성공 여부 테스트", async () => {
    const notifier = (0, index_1.createNotificationManager)();
    const result = await notifier.send({
        channel: "email",
        recipient: "test@survival.com",
        message: "Test message"
    });
    assert.strictEqual(result.success, true, "알림 발송 결과는 success: true 여야 합니다.");
    assert.ok(result.timestamp, "결과에 타임스탬프가 포함되어야 합니다.");
});
