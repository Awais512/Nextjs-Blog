import axios from 'axios';
import { API } from '../config';

export const registerUser = async ({ name, email, password }) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return await axios.post(
    `${API}/auth/register`,
    { name, email, password },
    config
  );
};

export const login = async ({ email, password }) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return await axios.post(`${API}/auth/login`, { email, password }, config);
};
