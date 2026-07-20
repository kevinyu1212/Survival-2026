import { test } from "node:test";
import * as assert from "node:assert";
import { createNotificationManager } from "./index";

test("notification-kit sends notification successfully", async () => {
    const manager = createNotificationManager();
    const result = await manager.send({
        recipient: "test@survival.com",
        channel: "EMAIL",
        message: "테스트 알림입니다."
    });

    assert.strictEqual(result, true, "알림 발송 결과는 true 여야 합니다.");
});
