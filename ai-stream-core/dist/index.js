"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIStreamManager = void 0;
exports.createAIStreamManager = createAIStreamManager;
class AIStreamManager {
    costPerRequest;
    constructor(costPerRequest = 1) {
        this.costPerRequest = costPerRequest;
    }
    validateAndDeductCredits(currentCredits) {
        if (currentCredits < this.costPerRequest) {
            return {
                success: false,
                remainingCredits: currentCredits,
                error: 'Insufficient credits. Please upgrade your plan or top up.'
            };
        }
        return {
            success: true,
            remainingCredits: currentCredits - this.costPerRequest
        };
    }
    async *simulateAIStream(prompt) {
        const dummyResponse = `AI Response for: "${prompt}". This is streamed in real-time chunks.`;
        const chunks = dummyResponse.split(' ');
        for (const chunk of chunks) {
            await new Promise((resolve) => setTimeout(resolve, 100)); // 100ms ������ �ùķ��̼�
            yield chunk + ' ';
        }
    }
}
exports.AIStreamManager = AIStreamManager;
function createAIStreamManager(costPerRequest) {
    return new AIStreamManager(costPerRequest);
}
