import { mapState } from 'pinia';
import { useUserStore } from '@/stores/UserStore';

export const authComputed = {
  ...mapState(useUserStore, ['loggedIn']),
};
