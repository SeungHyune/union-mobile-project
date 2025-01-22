const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchApi = (url: string, options: RequestInit = {}) => {
  return fetch(`${API_URL}${url}`, {
    ...options,
  });
};

export default fetchApi;
