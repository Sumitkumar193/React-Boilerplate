import axios from "axios";

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

export const get = async (url, data = {}, options = {}) => {
    try {
        const response = await api.get(url, { ...options, params: data });
        return response.data;
    } catch (error) {
        return error;
    }
}

export const post = async (url, data = {}, options = {}) => {
    try {
        const response = await api.post(url, data, options);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const put = async (url, data = {}, options = {}) => {
    try {
        const response = await api.put(url, data, options);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const destroy = async (url, options = {}) => {
    try {
        const response = await api.delete(url, options);
        return response.data;
    } catch (error) {
        return error;
    }
}