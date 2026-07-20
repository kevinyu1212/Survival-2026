export interface BillingManager {
  createCheckoutSession(userId: string, tier: string, currency?: string): string;
}

export function createBillingManager(): BillingManager {
  return {
    createCheckoutSession(userId: string, tier: string, currency: string = "USD"): string {
      return `https://checkout.survival.com/pay?user=${userId}&tier=${tier}&currency=${currency}`;
    }
  };
}
