export function createBillingManager(options?: any) {
    return {
        checkoutUrl: "https://billing.example.com/checkout",
        verifyProAccess: (role: string) => {
            const isPro = role === 'PRO' || role === 'ADMIN';
            return {
                granted: isPro,
                error: isPro ? null : "Requires PRO subscription tier."
            };
        },
        createCheckoutSession: async (params: any) => {
            return {
                sessionId: "cs_test_mock_12345",
                url: "https://billing.example.com/checkout/session_mock",
                checkoutUrl: "https://billing.example.com/checkout/session_mock"
            };
        }
    };
}
