"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBillingManager = createBillingManager;
function createBillingManager(options) {
    return {
        checkoutUrl: "https://billing.example.com/checkout",
        verifyProAccess: (role) => {
            const isPro = role === 'PRO' || role === 'ADMIN';
            return {
                granted: isPro,
                error: isPro ? null : "Requires PRO subscription tier."
            };
        },
        createCheckoutSession: async (params) => {
            return {
                sessionId: "cs_test_mock_12345",
                url: "https://billing.example.com/checkout/session_mock",
                checkoutUrl: "https://billing.example.com/checkout/session_mock"
            };
        }
    };
}
