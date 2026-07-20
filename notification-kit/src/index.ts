export interface NotificationOptions {
  channel: string;
  recipient: string;
  message: string;
}

export interface NotificationManager {
  send(options: NotificationOptions): Promise<boolean>;
}

export function createNotificationManager(): NotificationManager {
  return {
    async send(options: NotificationOptions): Promise<boolean> {
      console.log(`[Notification Sent via ${options.channel.toUpperCase()}] To: ${options.recipient} - Message: ${options.message}`);
      return true;
    }
  };
}
