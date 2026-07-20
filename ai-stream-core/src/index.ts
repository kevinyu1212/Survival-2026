export interface AIRequestOptions {
  prompt: string;
  model?: 'gpt-4o' | 'claude-3-5-sonnet';
  currentCredits: number;
}

export class AIStreamManager {
  private costPerRequest: number;

  constructor(costPerRequest: number = 1) {
    this.costPerRequest = costPerRequest;
  }

  public validateAndDeductCredits(currentCredits: number): { success: boolean; remainingCredits: number; error?: string } {
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

  public async *simulateAIStream(prompt: string): AsyncGenerator<string, void, unknown> {
    const dummyResponse = `AI Response for: "${prompt}". This is streamed in real-time chunks.`;
    const chunks = dummyResponse.split(' ');

    for (const chunk of chunks) {
      await new Promise((resolve) => setTimeout(resolve, 100)); // 100ms µô·¹ÀÌ ½Ã¹Ä·¹ÀÌ¼Ç
      yield chunk + ' ';
    }
  }
}

export function createAIStreamManager(costPerRequest?: number): AIStreamManager {
  return new AIStreamManager(costPerRequest);
}
