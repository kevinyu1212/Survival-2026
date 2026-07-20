"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSecurityManager = createSecurityManager;
function createSecurityManager() {
    return {
        check: () => true,
        audit: () => { },
        auditEnvironment: (env) => {
            return {
                isValid: true,
                passed: true,
                checkedKeys: Object.keys(env)
            };
        }
    };
}
