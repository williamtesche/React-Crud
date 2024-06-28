import axios from 'axios';

const API_URL = 'http://localhost:3000/users';

export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/list`);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post(API_URL, user);
  return response.data;
};