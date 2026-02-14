import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add auth tokens here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Contact API
export const contactAPI = {
  submit: (data) => api.post('/contact', data),
  getAll: (params) => api.get('/contacts', { params }),
};

// Consultation API
export const consultationAPI = {
  submit: (data) => api.post('/consultation', data),
  getAll: (params) => api.get('/consultations', { params }),
};

// Newsletter API
export const newsletterAPI = {
  subscribe: (email) => api.post('/newsletter/subscribe', { email }),
};

// Blog API
export const blogAPI = {
  getPosts: (params) => api.get('/blog/posts', { params }),
  getPost: (slug) => api.get(`/blog/posts/${slug}`),
};

// Team API
export const teamAPI = {
  getMembers: (params) => api.get('/team', { params }),
};

// Health check
export const healthCheck = () => api.get('/health');

export default api;
