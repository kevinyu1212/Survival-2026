export declare function createSecurityManager(): {
    check: () => boolean;
    audit: () => void;
    auditEnvironment: (env: Record<string, string>) => {
        isValid: boolean;
        passed: boolean;
        checkedKeys: string[];
    };
};
