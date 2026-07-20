"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNotificationManager = createNotificationManager;
function createNotificationManager() {
    return {
        send: async (options) => {
            console.log(`[Notification-Kit] Sending ${options.channel.toUpperCase()} to ${options.recipient}: "${options.message}"`);
            return {
                success: true,
                timestamp: new Date().toISOString()
            };
        }
    };
}
