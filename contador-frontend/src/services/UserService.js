import axios from 'axios';

const API_URL = 'http://localhost:3000/api/users';

const UserService = {
  getAllUsers: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  getUserById: async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  createUser: async (data) => {
    const response = await axios.post(API_URL + '/register', data);
    return response.data;
  },

  updateUser: async (id, data) => {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
  },

  deleteUser: async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  },

  register: async (data) => {
    const response = await axios.post(`${API_URL}/register`, data);
    return response.data;
  },

  login: async (data) => {
    const response = await axios.post(`${API_URL}/login`, data);
    return response.data;
  },

  getProfile: async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`${API_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  },

  updateUserWithFile: async (id, formData) => {
    const token = localStorage.getItem('token');
    const response = await axios.put(`${API_URL}/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
};

export default UserService;
