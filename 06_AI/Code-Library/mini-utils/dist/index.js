export const formatDate = (date) => {
    return date.toISOString().split('T')[0] ?? '';
};
export const uniqueArray = (arr) => {
    return [...new Set(arr)];
};
export const hello = () => 'Hello from mini-utils';
