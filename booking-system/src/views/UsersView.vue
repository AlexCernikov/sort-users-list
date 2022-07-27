<template>
  <UsersListCopy />
  <UsersList />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UsersList from '../components/AdminComponents/UsersAdmin/UsersList.vue';
import UsersListCopy from '../components/AdminComponents/UsersAdmin/UsersListCopy.vue';

export default defineComponent({
  components: {
    UsersList,
    UsersListCopy,
  },
});
</script>




