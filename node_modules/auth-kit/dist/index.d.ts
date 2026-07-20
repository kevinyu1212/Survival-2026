export interface UserSession {
    userId: string;
    email: string;
    role: 'free' | 'pro' | 'admin';
    credits: number;
}
export interface AuthConfig {
    provider: 'supabase' | 'authjs' | 'clerk';
    apiKey?: string;
}
export declare class AuthManager {
    private config;
    private currentSession;
    constructor(config: AuthConfig);
    setSession(session: UserSession): void;
    getSession(): UserSession | null;
    isAuthenticated(): boolean;
    isProUser(): boolean;
}
export declare function createAuthManager(config: AuthConfig): AuthManager;
