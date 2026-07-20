"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_kit_1 = require("auth-kit");
const billing_kit_1 = require("billing-kit");
const ai_stream_core_1 = require("ai-stream-core");
const security_kit_1 = require("security-kit");
async function runPaidFeatureSimulation() {
    console.log('?? [Survival-SaaS-AI] Starting Paid Feature & Tier-Gating Simulation...\n');
    const security = (0, security_kit_1.createSecurityManager)();
    const auditResult = security.auditEnvironment({ PORT: '3000', JWT_SECRET: 'secure_2026' });
    console.log(`??? [Security Audit] Passed: ${auditResult.passed}`);
    const auth = (0, auth_kit_1.createAuthManager)({ provider: 'supabase' });
    auth.setSession({
        userId: 'user_2026_002',
        email: 'creator_free@survival.com',
        role: 'free',
        credits: 0
    });
    const session = auth.getSession();
    console.log(`?? User Logged In: ${session?.email} (Role: ${session?.role}, Credits: ${session?.credits})`);
    const billing = (0, billing_kit_1.createBillingManager)({ provider: 'stripe', secretKey: 'sk_live_mock_secure_key' });
    if (session) {
        console.log(`\n?? Attempting to access Pro-tier Advanced AI Engine...`);
        const proAccessCheck = billing.verifyProAccess(session.role);
        if (!proAccessCheck.granted) {
            console.log(`? Access Denied: ${proAccessCheck.error}`);
            console.log(`?? Triggering Automated Upgrade Checkout for Pro Monthly...`);
            const checkout = await billing.createCheckoutSession({
                userId: session.userId,
                email: session.email,
                plan: 'pro_monthly',
                successUrl: 'http://localhost:3000/success',
                cancelUrl: 'http://localhost:3000/cancel'
            });
            console.log(`   ?? Checkout Redirect URL: ${checkout.checkoutUrl}`);
        }
        else {
            console.log(`? Pro Access Granted! Launching Advanced AI Stream...`);
            const aiManager = (0, ai_stream_core_1.createAIStreamManager)(5);
            for await (const chunk of aiManager.simulateAIStream('Advanced Deep Architectural Analysis')) {
                process.stdout.write(chunk);
            }
        }
    }
    console.log('\n? Paid Feature Simulation Completed Successfully!');
}
runPaidFeatureSimulation();
