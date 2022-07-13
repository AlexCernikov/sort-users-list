<template>
  <div class="home">
    <HeroSectionComponent msg="Welcome  to Your Vue.js + TypeScript App"/>
    <SpaceSectionComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeroSectionComponent from '@/components/HomeViewComponents/HeroSectionComponent.vue'; // @ is an alias to /src
import SpaceSectionComponent from '@/components/HomeViewComponents/SpaceSectionComponent.vue';

export default defineComponent({
  name: 'spaceSectionComponent',
  components: {
    HeroSectionComponent,
    SpaceSectionComponent,
  },
});
</script>
