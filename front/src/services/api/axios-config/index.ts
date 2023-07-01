import axios from 'axios';
import { errorInterceptor, responseInterceptor } from './interceptors';

const Api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
});

Api.interceptors.response.use(
	(response) => responseInterceptor(response),
	(error) => errorInterceptor(error)
);

export { Api };
