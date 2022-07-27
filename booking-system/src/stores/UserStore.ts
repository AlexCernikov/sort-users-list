import { defineStore } from 'pinia';
import axios from 'axios';
import { UserCreateModel, UserModel } from '@/models/user.model';

// eslint-disable-next-line import/prefer-default-export
export const useUserStore = defineStore('UserStore', {
  state: () => ({
    user: null as UserModel | null,
  }),
  actions: {
    async register(credentials: UserCreateModel) {
      return axios.post('http://135.181.104.18:8081/user/create', credentials)
        .then(({ data }) => {
          this.$state.user = data;
          localStorage.setItem('data', JSON.stringify(data));
          axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
          console.log('user data is: ', data);
        });
    },
    async login(credentials) {
      return axios.post('http://135.181.104.18:8081/user/authenticate', credentials)
        .then(({ data }) => {
          this.$state.user = data;
          localStorage.setItem('data', JSON.stringify(data));
          axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
          console.log('user data is: ', data);
        });
    },
  },
  getters: {
    loggedIn(state) {
      return !!state.user;
    },
  },
});
