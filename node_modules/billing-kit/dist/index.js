"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBillingManager = createBillingManager;
function createBillingManager() {
    return {
        createCheckoutSession(userId, tier, currency = "USD") {
            return `https://checkout.survival.com/pay?user=${userId}&tier=${tier}&currency=${currency}`;
        }
    };
}
