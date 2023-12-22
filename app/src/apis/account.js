import axios from 'axios';

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/account`
});

export const authNative = async (payload) => {
    const { data: responseData } = await api.post('/auth/native', payload);
    const { data } = responseData;

    return data;
};

export const authGoogle = async (payload) => {
    const { data: responseData } = await api.post('/auth/google', payload);
    const { data } = responseData;
    return data;
};

export const authFacebook = async (payload) => {
    const { data: responseData } = await api.post('/auth/facebook', payload);
    const { data } = responseData;
    return data;
};

export const authApple = async (payload) => {
    const { data: responseData } = await api.post('/auth/apple', payload);
    const { data } = responseData;
    return data;
};

export const refreshToken = async (payload) => {
    const { data: responseData } = await api.post('/auth/refresh', payload);
    const { data } = responseData;
    return data;
};
