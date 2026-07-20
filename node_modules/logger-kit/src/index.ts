export type LogLevel = "INFO" | "WARN" | "ERROR";

export interface Logger {
  info(message: string, meta?: Record<string, any>): void;
  warn(message: string, meta?: Record<string, any>): void;
  error(message: string, meta?: Record<string, any>): void;
}

export function createLogger(serviceName: string): Logger {
  const formatLog = (level: LogLevel, message: string, meta?: Record<string, any>) => {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      service: serviceName,
      message,
      ...(meta ? { meta } : {})
    };
    console.log(JSON.stringify(logEntry));
  };

  return {
    info: (msg, meta) => formatLog("INFO", msg, meta),
    warn: (msg, meta) => formatLog("WARN", msg, meta),
    error: (msg, meta) => formatLog("ERROR", msg, meta),
  };
}
