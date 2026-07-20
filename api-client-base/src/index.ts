export const apiClient = {
  get: async <T>(url: string, headers: HeadersInit = {}): Promise<T> => {
    const response = await fetch(url, { headers });
    if (!response.ok) throw new Error('API Error: ' + response.statusText);
    return response.json();
  },
  post: async <T>(url: string, data: any): Promise<T> => {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    return response.json();
  }
};
