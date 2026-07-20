export declare function createBillingManager(options?: any): {
    checkoutUrl: string;
    verifyProAccess: (role: string) => {
        granted: boolean;
        error: string | null;
    };
    createCheckoutSession: (params: any) => Promise<{
        sessionId: string;
        url: string;
        checkoutUrl: string;
    }>;
};
