export type LogLevel = "INFO" | "WARN" | "ERROR";
export interface Logger {
    info(message: string, meta?: Record<string, any>): void;
    warn(message: string, meta?: Record<string, any>): void;
    error(message: string, meta?: Record<string, any>): void;
}
export declare function createLogger(serviceName: string): Logger;
