import axios from 'axios';
import { API } from '../config';
import cookie from 'js-cookie';

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

export const signout = (next) => {
  removeCookie('token');
  removeLocalStorage('user');
  next();

  return axios
    .get(`${API}/auth/signout`)
    .then((response) => {
      console.log('signout success');
    })
    .catch((err) => console.log(err));
};

//Set Cookie
export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, { expires: 1 });
  }
};

//Remove Cookie
export const removeCookie = (key) => {
  if (process.browser) {
    cookie.remove(key, { expires: 1 });
  }
};

//get Cookie
export const getCookie = (key) => {
  if (process.browser) {
    return cookie.get(key);
  }
};

//Localstorage
export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

//Remove from Localstorage
export const removeLocalStorage = (key) => {
  if (process.browser) {
    localStorage.removeItem(key);
  }
};

export const authenticate = (data, next) => {
  setCookie('token', data.token);
  setLocalStorage('user', data.user);
  next();
};

export const isAuth = () => {
  if (process.browser) {
    const cookieChecked = getCookie('token');
    if (cookieChecked) {
      if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'));
      } else {
        return false;
      }
    }
  }
};
