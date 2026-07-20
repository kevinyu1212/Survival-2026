export const apiClient = {
    get: async (url, headers = {}) => {
        const response = await fetch(url, { headers });
        if (!response.ok)
            throw new Error('API Error: ' + response.statusText);
        return response.json();
    },
    post: async (url, data) => {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        });
        return response.json();
    }
};
