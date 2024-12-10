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
    const response = await axios.post(API_URL, data);
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
};

export default UserService;
