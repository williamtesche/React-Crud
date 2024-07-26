import { api } from './Api';

export const updateUser = async (id, user) => {
  try {
    const response = await api.put(`users/${id}`, user, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};