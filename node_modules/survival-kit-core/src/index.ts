// Survival-Kit-Core Independent Entry
export const version = '1.0.0';

export interface KitConfig {
  appName: string;
  debug: boolean;
}

export function createKit(config: KitConfig) {
  return {
    ...config,
    initializedAt: new Date().toISOString(),
  };
}
