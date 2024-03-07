import axios from 'axios';

const api = axios.create({
    baseURL: `${import.meta.env.VITE_TEMPLATE_BASE_URL}`
});

export const getTemplateList = async (params) => {
    const { data: responseData } = await api.get('/getlist', { params });
    const { data } = responseData;
    return data;
};
