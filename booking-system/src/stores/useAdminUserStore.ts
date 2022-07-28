import { defineStore } from 'pinia';
import axios from 'axios';

export const useAdminUserStore = defineStore('AdminUserStore', {
  state: () => ({
    counter: 0,
    name: 'Alex',
    todos: [{
      id: 1,
      name: 'first todo',
      comleted: true,
    }],
    users: [{
      id: '',
      firstname: '',
      lastname: '',
      email: '',
      role: '',
    }],
    uId:'',
    token: '',
    userForUpdate: '',
    showUpdate: false,
  }),
  getters: {
    doubleCount: (state) => {
        state.counter * 2;
    },
},
  actions: {
    reset() {
        this.counter = 0;
    },
    addOne() {
        this.counter++;
    },
    async getUsers() {
      return axios
        .get('http://135.181.104.18:8081/user')
        .then(({data}) => {
          this.$state.users = data;
          console.log('users :', data);
        });
    },
    updModal(id) {
      this.showUpdate = true;
      console.log('UPDATEUSER', id);
    },
    updateUser(data: { email:string, password:string,
      firstname:string; lastname:string; id:number; role:string;}) {
      console.log('DDDDDDDDATA', data, data.id, data.lastname, data.email, this.showUpdate);
        axios.put(
          'http://135.181.104.18:8081/user',
          {
            firstname: data.firstname,
            lastname: data.lastname,
            role: data.role,
            id: data.id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          },
        )
          .then((response) => {
            console.log(response);
            console.log(this.userForUpdate);
          });
        this.showUpdate = false;
      },
      handleCloseUpdate() {
        this.showUpdate = false;
      },
  },
});
