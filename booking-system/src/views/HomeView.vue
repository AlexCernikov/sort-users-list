<template>
  <div class="home">
    <HeroSectionComponent msg="Welcome  to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeroSectionComponent from '@/components/HomeViewComponents/HeroSectionComponent.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'heroSection',
  components: {
    HeroSectionComponent,
  },
});
</script>
