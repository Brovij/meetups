import { onMounted, ref } from 'vue';
import { getMeetups } from '../api/meetupsApi.js';
import { useApi } from './useApi.js';

export function useMeetupsFetch() {
  const meetups = ref(null);
  const { request, result } = useApi(getMeetups);

  onMounted(async () => {
    await request();
    meetups.value = result.value.data;
  });

  return {
    meetups,
  };
}
