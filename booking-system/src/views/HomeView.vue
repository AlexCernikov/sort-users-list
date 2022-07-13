<template>
  <div class="home">
    <HeroSectionComponent msg="Welcome  to Your Vue.js + TypeScript App" />
    <WorkPerksComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeroSectionComponent from '@/components/HomeViewComponents/HeroSectionComponent.vue';
import WorkPerksComponent from '../components/HomeViewComponents/WorkPerksComponent.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'heroSection',
  components: {
    HeroSectionComponent,
    WorkPerksComponent,
  },
});
</script>
