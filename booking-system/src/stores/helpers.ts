import { mapState } from 'pinia';
import { useUserStore } from '@/stores/UserStore';

// eslint-disable-next-line import/prefer-default-export
export const authComputed = {
  ...mapState(useUserStore, ['loggedIn']),
};
