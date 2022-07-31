<template>
  <div class="users-list">
    <h1 class="h1">Users List</h1>
    <div class="btn-create">
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
                <tr v-for="user in main.users" :key="user.id" class="tr-b">
                    <td>{{ user.firstname }}</td>
                    <td>{{ user.lastname }}</td>
                    <td>{{ user.email }}</td>
                    <td style="white-space: nowrap">
                    <button @click="showInfoUserItem(!showInfo, user)" type="button" class="btn btn-sm btn-secondary mr-1 btn-user">Info</button>
                    <button @click="showUpdateUserItem(!showUpdate, user)" type="button" class="btn btn-sm btn-primary mr-1 btn-user">Edit</button>
                    <button @click="showDeleteUserItem(!showDelete, user)" type="button" class="btn btn-sm btn-secondary mr-1 btn-user">Delete</button>
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

              <InfoUserModal
              :show="showInfo"
              :userInfo="userInfo"
              @cancel="handleCloseInfo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserCreateModal from '../../Modals/UserCreateModal.vue';
import DeleteUserModal from '@/components/Modals/DeleteUserModal.vue';
import UpdateUserModal from '@/components/Modals/UpdateUserModal.vue';
import InfoUserModal from '@/components/Modals/InfoUserModal.vue';
import {useAdminUserStore} from '../../../stores/useAdminUserStore';

export default defineComponent({
  name: 'UsersList',
  components: {
    UserCreateModal,
    UpdateUserModal,
    DeleteUserModal,
    InfoUserModal,
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
      showInfo: false,
      userForUpdate: {},
      userForUpdateId: '',
      userForDelete: {},
      userForDeleteId: '',
      userInfo: {},
    };
  },
  mounted() {
    this.getAllUsers();
  },
  methods: {
    async getAllUsers() {
    this.main.getUsers();
    },
    showUpdateUserItem(showUpdate, user) {
      this.showUpdate = showUpdate;
      this.userForUpdate = user;
    },
    showDeleteUserItem(showDelete, user) {
      this.showDelete = showDelete;
      this.main.userForDeleteId = user.id;
      console.log('userForDeleteId', user.id)
    },
    showInfoUserItem(showInfo, user) {
      this.showInfo = showInfo;
      this.userInfo= user;
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
    handleCloseInfo() {
      this.showInfo = false;
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
.btn-create{
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
}
.btn-user{
    margin-left: 10px;
}
.h1{
  margin-left: 41px;
    margin-top: 50px;
}
.users-list{
  margin: 0 auto;
}
.table tr:hover{
  background-color: gray;
}
</style>
