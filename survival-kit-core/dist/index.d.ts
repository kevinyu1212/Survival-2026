export declare const version = "1.0.0";
export interface KitConfig {
    appName: string;
    debug: boolean;
}
export declare function createKit(config: KitConfig): {
    initializedAt: string;
    appName: string;
    debug: boolean;
};
