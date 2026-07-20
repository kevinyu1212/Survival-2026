export interface AIRequestOptions {
    prompt: string;
    model?: 'gpt-4o' | 'claude-3-5-sonnet';
    currentCredits: number;
}
export declare class AIStreamManager {
    private costPerRequest;
    constructor(costPerRequest?: number);
    validateAndDeductCredits(currentCredits: number): {
        success: boolean;
        remainingCredits: number;
        error?: string;
    };
    simulateAIStream(prompt: string): AsyncGenerator<string, void, unknown>;
}
export declare function createAIStreamManager(costPerRequest?: number): AIStreamManager;
