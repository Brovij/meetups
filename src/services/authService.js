import { logoutUser } from '../api/authApi';

export const AUTH_STORAGE_KEY = 'user';

export function persistUser(user) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
}

export function forgotUser() {
  localStorage.removeItem(AUTH_STORAGE_KEY);
}

export function restoreUser() {
  const maybeUser = localStorage.getItem(AUTH_STORAGE_KEY);
  return maybeUser ? JSON.parse(maybeUser) : null;
}

export async function logout() {
  const { success } = await logoutUser();
  if (success) {
    forgotUser();
    location.reload();
  }
}
