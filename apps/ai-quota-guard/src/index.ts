import { createCacheManager } from "cache-kit";
import { createNotificationManager } from "notification-kit";
import { createBillingManager } from "billing-kit";
import { createSecurityManager } from "security-kit";

async function runQuotaGuardSimulation() {
    console.log("⚡ [AI-Quota-Guard] Starting Smart Quota & Caching Intelligence Simulation...\n");

    const cache = createCacheManager();
    const notifier = createNotificationManager();
    const billing = createBillingManager();
    const security = createSecurityManager();

    // 1. 보안 검사 수행
    const secAudit = security.auditEnvironment({ APP_NAME: "ai-quota-guard", MODE: "production" });
    console.log(`🔒 [Security Audit] Passed: ${secAudit.passed}`);

    // 2. 테스트 사용자 설정 (무료 사용자, 일일 쿼타 3회 제한)
    const user = {
        id: "usr_free_999",
        email: "growth_target@survival.com",
        role: "FREE",
        dailyQuotaLimit: 3
    };

    console.log(`👤 User Logged In: ${user.email} (Role: ${user.role}, Quota Limit: ${user.dailyQuotaLimit})\n`);

    // 3. AI 요청 시뮬레이션 함수 (Cache-Kit + Quota Guard + Notification-Kit 결합)
    async function requestAIEngine(prompt: string) {
        const cacheKey = `quota:${user.id}:${prompt}`;
        
        // 캐시 확인 (스마트 캐싱 인텔리전스)
        const cachedResult = cache.get(cacheKey);
        if (cachedResult) {
            console.log(`🚀 [Cache Hit] Serving response instantly from cache for: "${prompt}"`);
            return cachedResult;
        }

        console.log(`🧠 [Cache Miss] Processing AI generation for: "${prompt}"...`);

        // 현재 사용량 카운트 체크
        const usageKey = `usage:${user.id}`;
        let currentUsage = cache.get(usageKey) || 0;

        if (currentUsage >= user.dailyQuotaLimit) {
            console.log(`⚠️ [Quota Exceeded] User ${user.email} has reached daily limit (${user.dailyQuotaLimit}/${user.dailyQuotaLimit})`);
            
            // Notification-Kit을 통한 실시간 초과 경고 및 전환 유도 알림 발송
            await notifier.send({
                channel: 'email',
                recipient: user.email,
                message: '일일 AI 무료 사용량을 모두 소모하셨습니다. PRO로 업그레이드하고 무제한 AI를 즐기세요!'
            });

            // Billing-Kit을 통한 업그레이드 체크아웃 세션 생성
            const checkout = await billing.createCheckoutSession({ tier: 'PRO_MONTHLY' });
            console.log(`💳 [Growth Engine] Checkout Link Generated for Conversion: ${checkout.url}`);
            
            return { error: "Quota Exceeded. Please upgrade to PRO.", upgradeUrl: checkout.url };
        }

        // 사용량 증가 및 캐시 저장
        currentUsage += 1;
        cache.set(usageKey, currentUsage, 300); // 5분 유지

        const aiResponse = `AI Generated Output for [${prompt}] (Usage: ${currentUsage}/${user.dailyQuotaLimit})`;
        
        // 결과 캐싱
        cache.set(cacheKey, aiResponse, 60);
        return aiResponse;
    }

    // 4. 시뮬레이션 시나리오 실행 (반복 요청으로 쿼타 초과 유도)
    console.log("--- Request 1 ---");
    console.log("Result:", await requestAIEngine("Write a startup pitch"));
    
    console.log("\n--- Request 2 (Identical Prompt -> Should Trigger Cache Hit) ---");
    console.log("Result:", await requestAIEngine("Write a startup pitch"));

    console.log("\n--- Request 3 ---");
    console.log("Result:", await requestAIEngine("Analyze market trends"));

    console.log("\n--- Request 4 ---");
    console.log("Result:", await requestAIEngine("Generate marketing copy"));

    console.log("\n--- Request 5 (Quota Exceeded Trigger!) ---");
    console.log("Result:", await requestAIEngine("Design system architecture"));

    console.log("\n✨ AI Quota Guard & Caching Simulation Completed Successfully!");
}

runQuotaGuardSimulation();
