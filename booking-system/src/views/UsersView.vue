<template>
  <UsersListCopy2 />
  <UsersListCopy />
  <UsersList />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UsersList from '../components/AdminComponents/UsersAdmin/UsersList.vue';
import UsersListCopy from '../components/AdminComponents/UsersAdmin/UsersListCopy.vue';
import UsersListCopy2 from '../components/AdminComponents/UsersAdmin/UsersListCopy2.vue';

export default defineComponent({
  components: {
    UsersList,
    UsersListCopy,
    UsersListCopy2,
  },
});
</script>




