export function createSecurityManager() {
    return {
        check: () => true,
        audit: () => {},
        auditEnvironment: (env: Record<string, string>) => {
            return {
                isValid: true,
                passed: true,
                checkedKeys: Object.keys(env)
            };
        }
    };
}
