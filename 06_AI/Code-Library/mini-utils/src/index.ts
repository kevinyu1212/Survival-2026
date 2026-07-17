export const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0] ?? '';
};

export const uniqueArray = <T>(arr: T[]): T[] => {
  return [...new Set(arr)];
};

export const hello = () => 'Hello from mini-utils';
