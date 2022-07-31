<template>
  <UsersListCopy2 />
  <!-- <UsersListCopy />
  <UsersList /> -->
  <UsersList />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UsersListCopy2 from '../components/AdminComponents/UsersAdmin/UsersListCopy2.vue';
import UsersList from '../components/AdminComponents/UsersAdmin/UsersList.vue';

export default defineComponent({
  components: {
    UsersListCopy2,
    UsersList,
  },
});
</script>




