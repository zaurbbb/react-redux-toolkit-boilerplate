import axios from "axios";

export const API_URL = "пусто";
export const API = axios.create({
    baseURL: API_URL,
    withCredentials: true
});

// request interceptor for adding token to headers
API.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
    return config;
});

// response interceptor for refreshing token
API.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            return API.request(originalRequest);
        } catch (e) {
            console.error("Unauthorized");
            // window.location.href = "/login";
            localStorage.removeItem("accessToken");
        }
    }
    throw error;
});
