import { useAuthStore } from '../stores/useAuthStore.js';

export function authGuard(to) {
  if (to.meta.requireAuth && !useAuthStore().isAuthenticated) {
    return { name: 'login', query: { from: to.fullPath } };
  }

  if (to.meta.requireGuest && useAuthStore().isAuthenticated) {
    return { name: 'index' };
  }

  return true;
}
