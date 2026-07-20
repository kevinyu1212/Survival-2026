export interface NotificationOptions {
    channel: string;
    recipient: string;
    message: string;
}
export interface NotificationManager {
    send(options: NotificationOptions): Promise<boolean>;
}
export declare function createNotificationManager(): NotificationManager;
