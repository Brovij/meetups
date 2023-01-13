import { httpClient } from './httpClient/httpClient.js';

export function getMeetups() {
  return httpClient.get('/meetups');
}

export function getMeetup(id) {
  return httpClient.get(`/meetups/${id}`);
}

export function postMeetup(meetup) {
  return httpClient.post('/meetups', meetup);
}

export function putMeetup(meetup) {
  return httpClient.put(`/meetups/${meetup.id}`, meetup);
}

export function deleteMeetup(id) {
  return httpClient.delete(`/meetups/${id}`);
}

export function attendMeetup(id) {
  return httpClient.post(`/meetups/${id}/participation`);
}

export function leaveMeetup(id) {
  return httpClient.delete(`/meetups/${id}/participation`);
}
