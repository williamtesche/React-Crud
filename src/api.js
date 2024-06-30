import axios from 'axios';

export const api = axios.create({ baseURL: 'http://localhost:3001' });

export const getUsers = async () => {
  try {
    const response = await api.get('users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};


export const deleteUser = async (userid) => {
  try {
    const response = await api.delete(`users/${userid}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
} 


export const createUser = async (user) => {
  try {
    const response = await api.post('users', user, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};