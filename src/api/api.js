import axios, { AxiosError } from "axios";

const baseURL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";

const api = axios.create({
    baseURL,
});

api.interceptors.request.use(
    (config) => {
        config.headers["Authorization"] = `Bearer ${localStorage.getItem("accessToken")}`;
        config.headers["Content-Type"] = "application/json";
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const handleError = (error) => {
    if (error instanceof AxiosError) {
        const statusCode = error.response?.status;
        switch (statusCode) {
            case 401:
                // Handle 401 error
                localStorage.removeItem("accessToken");
                window.location.href = "/";
                break;
            case 403:
                // Handle 403 error
                window.location.href = "/403";
                break;
            case 404:
                // Handle 404 error
                window.location.href = "/404";
                break;
            default:
                break;
        }
    }
    return error;
}

export const get = async (url, data = {}, options = {}) => {
    try {
        const response = await api.get(url, { ...options, params: data });
        return response.data;
    } catch (error) {
        return handleError(error);
    }
}

export const post = async (url, data = {}, options = {}) => {
    try {
        const response = await api.post(url, data, options);
        return response.data;
    } catch (error) {
        return handleError(error);
    }
}

export const put = async (url, data = {}, options = {}) => {
    try {
        const response = await api.put(url, data, options);
        return response.data;
    } catch (error) {
        return handleError(error);
    }
}

export const destroy = async (url, options = {}) => {
    try {
        const response = await api.delete(url, options);
        return response.data;
    } catch (error) {
        return handleError(error);
    }
}