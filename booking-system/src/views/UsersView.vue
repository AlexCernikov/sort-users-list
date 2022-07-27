<template>
  <UsersList />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UsersList from '../components/AdminComponents/UsersAdmin/UsersList.vue';

export default defineComponent({
  components: {
    UsersList,
  },
});
</script>
