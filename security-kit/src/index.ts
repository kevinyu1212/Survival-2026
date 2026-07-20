export function auditEnvironment(env: Record<string, string | undefined>): boolean {
  if (!env.NODE_ENV || !env.API_SECRET) {
    return false;
  }
  return env.API_SECRET.length > 5;
}
