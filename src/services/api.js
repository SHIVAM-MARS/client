import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Auth API calls
export const login = async (email, password) => {
    return await axios.post(`${API_URL}/auth/login`, { email, password });
};

// Book-related API calls
export const fetchBooks = async () => {
    return await axios.get(`${API_URL}/books`);
};
