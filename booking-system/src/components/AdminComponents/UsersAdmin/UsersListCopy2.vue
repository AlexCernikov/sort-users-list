<template>
  <div class="users-list">
    <h1 class="h1">Users List</h1>
    <div class="btn-list">
      <button class="btn btn-primary" @click="showCreate = !showCreate">
            Create User
            <UserCreateModal
              :show="showCreate"
              @onUserCreate="main.createUser"
              @cancel="handleCloseCreate"/>
          </button>
    </div>
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
                <tr v-for="user in main.users" :key="user.id">
                    <td>{{ user.firstname }}</td>
                    <td>{{ user.lastname }}</td>
                    <td>{{ user.email }}</td>
                    <td style="white-space: nowrap">
                    <button @click="showUpdateUserItem(!showUpdate, user)" class="btn btn-sm btn-primary mr-1">Edit</button>
                    <button @click="showDeleteUserItem(!showDelete, user)" type="button" class="btn btn-sm btn-secondary mr-1">Delete</button>
                    </td>
                </tr>
        </tbody>
    </table>
          <UpdateUserModal
              :show="showUpdate"
              :userForUpdate="userForUpdate"
              @onUserUpdate="main.updateUser"
              @cancel="handleCloseUpdate"/>
              <DeleteUserModal
              :show="showDelete"
              :userForDelete="userForDelete"
              @onUserDelete="main.deleteUser"
              @cancel="handleCloseDelete"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import UserCreateModal from '../../Modals/UserCreateModal.vue';
import DeleteUserModal from '@/components/Modals/DeleteUserModal.vue';
import UpdateUserModal from '@/components/Modals/UpdateUserModal.vue';
import {useAdminUserStore} from '../../../stores/useAdminUserStore';

export default defineComponent({
  name: 'UsersList',
  components: {
    UserCreateModal,
    UpdateUserModal,
    DeleteUserModal,
  },
  setup() {
    const main = useAdminUserStore();
    return {main};
  },
  data() {
    return {
      showCreate: false,
      showUpdate: false,
      showDelete: false,
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
    this.getAllUsers();
  },
  methods: {
    async getAllUsers() {
    this.main.getUsers();
    },
    // createUser(data: { email:string, password:string, firstName:string; lastName:string }) {
    //   console.log(data);
    //   axios.post(
    //     'http://135.181.104.18:8081/user/create',
    //     {
    //       email: data.email,
    //       password: data.password,
    //       firstname: data.firstName,
    //       lastname: data.lastName,
    //     },
    //   )
    //     .then((response) => {
    //       console.log(response);
    //     });
    //   this.showCreate = false;
    // },
    showUpdateUserItem(showUpdate, user) {
      this.showUpdate = showUpdate;
      this.userForUpdate = user;
    },
    showDeleteUserItem(showDelete, user) {
      this.showDelete = showDelete;
      this.main.userForDeleteId = user.id;
      console.log('userForDeleteId', user.id)
    },
    handleCloseCreate() {
      this.showCreate = false;
      this.getAllUsers();
    },
    handleCloseUpdate() {
      this.showUpdate = false;
      this.getAllUsers();
    },
    handleCloseDelete() {
      this.showDelete = false;
      this.getAllUsers();
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
