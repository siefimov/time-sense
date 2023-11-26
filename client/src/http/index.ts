import axios from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';

export const API_URL = 'http://localhost:5000/api';

const $api = axios.create({
    withCredentials: true, // to ensure that cookies are automaticly attached to each request
    baseURL: API_URL,
});

// attach token to each request
$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

$api.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originlRequest = error.config;
        if (error.response.status == 401 && error.config && !error.config._isRetry) {
            originlRequest._isRetry = true;
            try {
                const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true });
                localStorage.setItem('token', response.data.accessToken);
                return $api.request(originlRequest);
            } catch (error) {
                console.log('Is not authorized');
            }
        }
        throw error;
    }
);

export default $api;
