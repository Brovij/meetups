import { httpClient } from './httpClient/httpClient.js';

export function postImage(file) {
  const formData = new FormData();
  formData.append('file', file);
  return httpClient.post('/images/upload', formData);
}
