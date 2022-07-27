<template>
  <div v-if="isAdmin" class="admin">
    <SidebarComponent />
    <div class="admin__components">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SidebarComponent from '@/components/AdminComponents/SidebarComponent.vue';

export default defineComponent({
  components: { SidebarComponent },
  props: {
    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.admin__components {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: calc(100% - 12rem);
}
.admin {
  display: flex;
  .admin__components {
    flex-direction: column;
    padding: 2rem;
  }
}
</style>
