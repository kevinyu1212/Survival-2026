export interface NotificationOptions {
    channel: 'email' | 'webhook' | 'in-app';
    recipient: string;
    message: string;
}
export declare function createNotificationManager(): {
    send: (options: NotificationOptions) => Promise<{
        success: boolean;
        timestamp: string;
    }>;
};
