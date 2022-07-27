import { defineStore } from 'pinia';
import axios from 'axios';
import { UserModel } from '@/models/user.model';

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    user: null as UserModel | null,
    role: null,
  }),
  actions: {
    async register(credentials) {
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
          console.log('user token is: ', data);
        });
    },
    async getCurrentUser() {
      return axios.get('http://135.181.104.18:8081/user/current')
        .then(({ data }) => {
          this.$state.role = data.role;
          localStorage.setItem('role', data.role);
          axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
          console.log('user role is: ', data.role);
        });
    },
    async logout() {
      localStorage.removeItem('data');
      location.reload();
    },
  },
  getters: {
    loggedIn(state) {
      return !!state.user;
    },
  },
});
