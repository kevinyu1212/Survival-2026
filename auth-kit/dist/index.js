"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthManager = void 0;
exports.createAuthManager = createAuthManager;
class AuthManager {
    config;
    currentSession = null;
    constructor(config) {
        this.config = config;
    }
    setSession(session) {
        this.currentSession = session;
    }
    getSession() {
        return this.currentSession;
    }
    isAuthenticated() {
        return this.currentSession !== null;
    }
    isProUser() {
        return this.currentSession?.role === 'pro' || this.currentSession?.role === 'admin';
    }
}
exports.AuthManager = AuthManager;
function createAuthManager(config) {
    return new AuthManager(config);
}
