<template>
  <div v-if="isAdmin" class="admin">
    <DashboardComponent />
    <div class="admin__components">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DashboardComponent from '@/components/AdminComponents/DashboardComponent.vue';

export default defineComponent({
  components: { DashboardComponent },
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
  padding: 2rem;
  width: calc(100% - 4rem);
}
.admin {
  display: flex;
  .admin__components {
    flex: 1 1 0;
    padding: 2rem;
  }
}
</style>
