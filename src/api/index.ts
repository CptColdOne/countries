import axios from 'axios';

const axiosInstanceBackend = axios.create({
	// baseURL: `${import.meta.env.VITE_APP_HOST_LOCAL || window.location.origin}/api`,
	// baseURL: `${import.meta.env.VITE_APP_HOST_LOCAL}/v3.1`,
	baseURL: 'https://restcountries.com/v3.1',
});

axiosInstanceBackend.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response) return Promise.reject(error.response);
		return Promise.reject(error);
	},
);

export async function axiosFetchDriverBackend<TResponse>(
	url: string,
	params?: object,
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
	signal?: AbortSignal,
): Promise<TResponse> {
	const response = await axiosInstanceBackend.get(url, {
		params,
		method: method || 'GET',
		headers: { 'Content-Type': 'application/json' },
		validateStatus: (status) => status === 200,
		signal,
	});
	return response.data;
}
