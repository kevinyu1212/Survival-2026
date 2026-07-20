"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogger = createLogger;
function createLogger(serviceName) {
    const formatLog = (level, message, meta) => {
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
