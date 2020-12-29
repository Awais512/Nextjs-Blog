import axios from 'axios';
import { API } from '../config';

export const createCategory = async (name, token) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.post(`${API}/categories/create`, { name }, config);
};
