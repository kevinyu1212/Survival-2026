"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNotificationManager = createNotificationManager;
function createNotificationManager() {
    return {
        async send(options) {
            console.log(`[Notification Sent via ${options.channel.toUpperCase()}] To: ${options.recipient} - Message: ${options.message}`);
            return true;
        }
    };
}
