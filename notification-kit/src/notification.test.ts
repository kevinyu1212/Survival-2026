import { test } from "node:test";
import * as assert from "node:assert";
import { createNotificationManager } from "./index";

test("Notification-Kit: 알림 발송 성공 여부 테스트", async () => {
    const notifier = createNotificationManager();
    const result = await notifier.send({
        channel: "email",
        recipient: "test@survival.com",
        message: "Test message"
    });
    
    assert.strictEqual(result.success, true, "알림 발송 결과는 success: true 여야 합니다.");
    assert.ok(result.timestamp, "결과에 타임스탬프가 포함되어야 합니다.");
});
