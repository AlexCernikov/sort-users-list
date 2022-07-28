<script setup  lang="ts">
import { defineComponent } from 'vue';
import { mapStores } from 'pinia';
import {useAdminUserStore} from '../../../stores/useAdminUserStore';
import {storeToRefs} from 'pinia';
import UpdateUserModal from '@/components/Modals/UpdateUserModal.vue';
const main = useAdminUserStore();
const {users} = storeToRefs(useAdminUserStore());
main.showUsers();

// export default defineComponent({
//     components: {

//     }


// });

</script>

<template>
  <div class="users-list">
    <h1>This is the "Contact Us" page. Under Development</h1>
    <h1>{{}}</h1>
    <button @click="main.addOne">clickMe</button>
    <button @click="main.updUser">clickMe</button>

    <!-- <button @click="main.showUsers">clickMe</button> -->
    <!-- <div v-for="user in users" :key="user.id">
    <p>{{user.id}}</p>
    </div> -->
<UpdateUserModal
              :show="main.showUpdate"
              :userForUpdate="main.userForUpdate"
              @onUserUpdate="main.updateUser"
              @cancel="main.handleCloseUpdate"/>

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
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.firstname }}</td>
                    <td>{{ user.lastname }}</td>
                    <td>{{ user.email }}</td>
                    <td style="white-space: nowrap">
                    <button @click="main.updModal" :update="user">clickMe</button>
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
  </div>
</template>


