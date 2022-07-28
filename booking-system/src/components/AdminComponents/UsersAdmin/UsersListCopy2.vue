<template>
  <div class="users-list">
    <h1 class="h1">Users List</h1>
    <div class="btn-list">
      <button class="btn btn-primary" @click="showCreate = !showCreate">
            Create User
            <UserCreateModal
              :show="showCreate"
              @onUserCreate="createUser"
              @cancel="handleCloseCreate"/>
          </button>

    </div>
    <!-- <div class="table-list">
            <ul class="list">
              <li class="table-item table-item1"> </li>
              <li class="table-item table-item2">First Name</li>
              <li class="table-item table-item3">Last Name</li>
              <li class="table-item table-item4">Email</li>
            </ul>
            </div>
            <UserItem
          v-for="user in users "
          :key="user.id"
          :user="user"
          @update='update'
          @showUpdateUserItem="showUpdateUserItem"
          @showDeleteUserItem="showDeleteUserItem"
          /> -->
          <table class="table table-striped">
        <thead>
            <tr>
                <th style="width: 30%">First Name</th>
                <th style="width: 30%">Last Name</th>
                <th style="width: 30%">Username</th>
                <th style="width: 10%"></th>
            </tr>
        </thead>
        <tbody>
            <template v-if="users.length">
                <tr v-for="user in main.users" :key="user.id">
                    <td>{{ user.firstname }}</td>
                    <td>{{ user.lastname }}</td>
                    <td>{{ user.email }}</td>
                    <td style="white-space: nowrap">
                    <button @click="main.updModal(user.id)">clickMe</button>
                        <router-link :to="`/users/edit/${user.id}`" class="btn btn-sm btn-primary mr-1">Edit</router-link>
                        <!-- <button @click="usersStore.delete(user.id)" class="btn btn-sm btn-danger btn-delete-user" :disabled="user.isDeleting"> -->
                            <!-- <span v-if="user.isDeleting" class="spinner-border spinner-border-sm"></span>
                            <span v-else>Delete</span> -->
                        <!-- </button> -->
                    </td>
                </tr>
            </template>
            <!-- <tr v-if="users.loading">
                <td colspan="4" class="text-center">
                    <span class="spinner-border spinner-border-lg align-center"></span>
                </td>
            </tr>
            <tr v-if="users.error">
                <td colspan="4">
                    <div class="text-danger">Error loading users: {{users.error}}</div>
                </td>
            </tr>             -->
        </tbody>
    </table>
          <UpdateUserModal
              :show="showUpdate"
              :userForUpdate="userForUpdate"
              @onUserUpdate="updateUser"
              @cancel="handleCloseUpdate"/>
              <DeleteUserModal
              :show="showDelete"
              :userForDelete="userForDelete"
              @onUserDelete="deleteUser"
              @cancel="handleCloseDelete"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import UserCreateModal from '../../Modals/UserCreateModal.vue';
import DeleteUserModal from '@/components/Modals/DeleteUserModal.vue';
import UpdateUserModal from '@/components/Modals/UpdateUserModal.vue';
// import UserItem from './UserItem.vue';
import {useAdminUserStore} from '../../../stores/useAdminUserStore';
import {storeToRefs} from 'pinia';
const {users} = storeToRefs(useAdminUserStore());

export default defineComponent({
  name: 'UsersList',
  components: {
    UserCreateModal,
    UpdateUserModal,
    DeleteUserModal,
    // UserItem,
  },
  setup() {
    const {users} = storeToRefs(useAdminUserStore());
    const main = useAdminUserStore();
    return {main};
  },
  data() {
    return {
      token: '',
      users: [],
      showCreate: false,
      showUpdate: false,
      showDelete: false,
      newUser: {},
      userForUpdate: {
        id: 0,
        email: '',
        firstname: '',
        lastname: '',
        role: '',
      },
      userForUpdateId: '',
      userForDelete: {},
      userForDeleteId: '',
    };
  },
  mounted() {
    this.showUsers();
  },
  methods: {
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
          console.log(response);
        });
      this.showCreate = false;
      this.showUsers();
    },
    updateUser(data: { email:string, password:string,
    firstName:string; lastName:string; id:number; role:string;}) {
      axios.put(
        'http://135.181.104.18:8081/user',
        {
          firstname: data.firstName,
          lastname: data.lastName,
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
    deleteUser() {
      axios
        .delete(`http://135.181.104.18:8081/user/${this.userForDeleteId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          this.userForDelete = response;
        });
      this.showDelete = false;
      this.showUsers();
    },
    showUpdateUserItem(showUpdate, user) {
      this.showUpdate = showUpdate;
      this.userForUpdate = user;
      this.userForUpdateId = user.id;
      this.userForUpdate.role = user.role;
    },
    showDeleteUserItem(showDelete, user) {
      this.showDelete = showDelete;
      this.userForDelete = user;
      this.userForDeleteId = user.id;
    },
    handleCloseCreate() {
      this.showCreate = false;
    },
    handleCloseUpdate() {
      this.showUpdate = false;
    },
    handleCloseDelete() {
      this.showDelete = false;
    },
  },
});
</script>

<style scoped lang='scss'>
@import 'public/styles.scss';
.table{
  width: 700px;
}
.btn-list{
  display: flex;
  align-self: right;
  justify-content: flex-end;
  padding-right: 20px;
}
.table-list{
  display: flex;
  padding-left: 20px;
  border-bottom: 1px solid gray;
}
.list{
  display: flex;
    list-style-type: none;
    justify-content: flex-start;
    width: 55%;
    margin-left: 0;
    padding: 0;
}
.table-item{
  display: block;
  font-size: 22px;
  display: block;
  font-size: 22px;
}
.table-item2{
  margin-right: 52px;
}
.table-item3{
  margin-right: 15px;
}
.table-item:first-child{
  width: 40px;
}
.table-item:last-child{
  margin-left: 40px;
}
.h1{
  margin-left: 41px;
    margin-top: 50px;
}
.users-list{
  margin: 0 auto;
}
</style>
