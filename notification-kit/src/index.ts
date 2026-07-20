export interface NotificationOptions {
    channel: 'email' | 'webhook' | 'in-app';
    recipient: string;
    message: string;
}

export function createNotificationManager() {
    return {
        send: async (options: NotificationOptions) => {
            console.log(`[Notification-Kit] Sending ${options.channel.toUpperCase()} to ${options.recipient}: "${options.message}"`);
            return {
                success: true,
                timestamp: new Date().toISOString()
            };
        }
    };
}
