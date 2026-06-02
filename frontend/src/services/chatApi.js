import axios from 'axios';

const API_URL = import.meta.env.VITE_CHAT_API_URL || 'http://localhost:8000/api';

export const sendMessage = async (query, websiteId = 'shnoor') => {
    try {
        const response = await axios.post(`${API_URL}/chat/message`, { query, website_id: websiteId });
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};

export const uploadKB = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    
    try {
        const response = await axios.post(`${API_URL}/kb/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error uploading KB:', error);
        throw error;
    }
};

export const checkKBStatus = async () => {
    try {
        const response = await axios.get(`${API_URL}/kb/status`);
        return response.data;
    } catch (error) {
        console.error('Error checking KB status:', error);
        throw error;
    }
};

export const getUnresolvedQueries = async () => {
    try {
        const response = await axios.get(`${API_URL}/admin/learning/unresolved`);
        return response.data.unresolved_queries;
    } catch (error) {
        console.error('Error fetching unresolved queries:', error);
        throw error;
    }
};

export const teachBot = async (query, answer, websiteId = 'shnoor') => {
    try {
        const response = await axios.post(`${API_URL}/admin/learning/teach`, { query, answer, website_id: websiteId });
        return response.data;
    } catch (error) {
        console.error('Error teaching bot:', error);
        throw error;
    }
};
