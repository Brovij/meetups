import { httpClient } from './httpClient/httpClient.js';

export function getUser() {
  return httpClient.get('/auth/user');
}

export function loginUser(email, password) {
  return httpClient.post('/auth/login', { email, password });
}

export function registerUser(user) {
  return httpClient.post('/auth/register', user);
}

export function logoutUser() {
  return httpClient.post('/auth/logout');
}
