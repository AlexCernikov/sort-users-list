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
    showUsers() {
      axios({
        method: 'POST',
        url: 'http://135.181.104.18:8081/user/authenticate',
        data: {
          email: 'anonymous@isd.com',
          password: 'qwe123',
        },
      })
        .then((response) => {
          this.token = response.data.token;
          localStorage.setItem('token', this.token!);
          console.log('RESPONSE', this.token);
          this.getUsers();
        });
    },
    getUsers() {
      axios
        .get('http://135.181.104.18:8081/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          this.users = response.data;
        });
    },
    updModal(id) {
      this.showUpdate = true;
      this.uId = id;
      // this.updateUser = user;
      console.log('UPDATEUSER', this.uId);
    },
    updateUser(data:{email:any, id:any, firstname:any, lastname:any, role:any}) {
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
        this.showUsers();
      },
      handleCloseUpdate() {
        this.showUpdate = false;
      },
  },
});
