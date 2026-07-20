export interface BillingManager {
    createCheckoutSession(userId: string, tier: string, currency?: string): string;
}
export declare function createBillingManager(): BillingManager;
