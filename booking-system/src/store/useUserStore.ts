// import { defineStore } from 'pinia';
// import axios from 'axios';

// export const useAdminUserStore = defineStore('AdminUserStore', {
//   state: () => ({
//     counter: 0,
//     name: 'Alex',
//     todos: [{
//       id: 1,
//       name: 'first todo',
//       comleted: true,
//     }],
//     users: [{
//       id: '',
//       firstname: '',
//       lastname: '',
//       email: '',
//       role: '',
//     }],
//     token: '',
//   }),
//   getters: {
//     doubleCount: (state) => {
//         state.counter * 2;
//     },
// },
//   actions: {
//     reset() {
//         this.counter = 0;
//     },
//     addOne() {
//         this.counter++;
//     },
//     showUsers() {
//       axios({
//         method: 'POST',
//         url: 'http://135.181.104.18:8081/user/authenticate',
//         data: {
//           email: 'anonymous@isd.com',
//           password: 'qwe123',
//         },
//       })
//         .then((response) => {
//           this.token = response.data.token;
//           localStorage.setItem('token', this.token!);
//           console.log('RESPONSE', this.token);
//           this.getUsers();
//         });
//     },
//     getUsers() {
//       axios
//         .get('http://135.181.104.18:8081/user', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         })
//         .then((response) => {
//           this.users = response.data;
//         });
//     },
//   },
// });
