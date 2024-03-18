import axios from 'axios';

const api = axios.create({
    baseURL: 'https://staging-gtw.twibbonize.com/editor'
});

export const getTemplateList = async (params) => {
    const { data: responseData } = await api.get('/getlist', { params });
    const { data } = responseData;
    return data;
};
