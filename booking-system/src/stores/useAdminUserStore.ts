import { defineStore } from 'pinia';
import axios from 'axios';

export const useAdminUserStore = defineStore('AdminUserStore', {
  state: () => ({
    counter: 0,
    name: 'adminUsersStore',
    users: {},
    token: '',
    userForUpdate: '',
    userForDelete: {},
    userForDeleteId: '',
    showUpdate: false,
  }),
  actions: {
    async getUsers() {
      return axios
        .get('http://135.181.104.18:8081/user')
        .then(({data}) => {
          this.$state.users = data;
          console.log('users :', data);
        });
    },
    createUser(data: { email:string, password:string, firstName:string; lastName:string }) {
      console.log(data);
      axios.post(
        'http://135.181.104.18:8081/user/create',
        {
          email: data.email,
          password: data.password,
          firstname: data.firstName,
          lastname: data.lastName,
        },
      )
        .then((response) => {
          console.log('Create',response);
        });
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
      deleteUser() {
        console.log('DELETEID', this.userForDeleteId)
        axios
          .delete(`http://135.181.104.18:8081/user/${this.userForDeleteId}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          })
          .then((response) => {
            this.userForDelete = response;
          });
      },
      handleCloseUpdate() {
        this.showUpdate = false;
      },
  },
});
