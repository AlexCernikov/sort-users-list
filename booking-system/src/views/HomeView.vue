<template>
  <div class="home">
    <FirstComponent msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FirstComponent from '@/components/FirstComponent.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'firstComponent',
  components: {
    FirstComponent,
  },
});
</script>
