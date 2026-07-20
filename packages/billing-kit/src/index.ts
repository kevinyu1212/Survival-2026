export interface CheckoutOptions {
  userId: string;
  email: string;
  plan: 'pro_monthly' | 'credit_pack_100';
  successUrl: string;
  cancelUrl: string;
}

export interface BillingManagerConfig {
  provider: 'stripe';
  secretKey: string;
}

export class BillingManager {
  private secretKey: string;

  constructor(config: BillingManagerConfig) {
    this.secretKey = config.secretKey;
  }

  public async createCheckoutSession(options: CheckoutOptions) {
    const sessionId = `cs_test_${Math.random().toString(36).substring(7)}`;
    const planName = options.plan === 'pro_monthly' ? 'Pro Monthly Subscription' : '100 AI Credit Pack';
    
    return {
      sessionId,
      plan: options.plan,
      checkoutUrl: `https://checkout.stripe.com/pay/${sessionId}?plan=${options.plan}`,
      message: `Checkout session created for ${options.email} (${planName}) using key prefix: ${this.secretKey.substring(0, 5)}...`
    };
  }

  public verifyProAccess(role: string): { granted: boolean; error?: string } {
    if (role !== 'pro' && role !== 'enterprise') {
      return {
        granted: false,
        error: 'This is a premium Pro-tier feature. Upgrade your plan to access advanced AI models.'
      };
    }
    return { granted: true };
  }
}

export function createBillingManager(config: BillingManagerConfig): BillingManager {
  return new BillingManager(config);
}
