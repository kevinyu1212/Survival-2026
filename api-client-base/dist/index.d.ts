export declare const apiClient: {
    get: <T>(url: string, headers?: HeadersInit) => Promise<T>;
    post: <T>(url: string, data: any) => Promise<T>;
};
