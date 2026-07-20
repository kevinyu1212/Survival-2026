"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditEnvironment = auditEnvironment;
function auditEnvironment(env) {
    if (!env.NODE_ENV || !env.API_SECRET) {
        return false;
    }
    return env.API_SECRET.length > 5;
}
