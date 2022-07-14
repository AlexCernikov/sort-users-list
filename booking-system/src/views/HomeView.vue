<template>
  <div class="home">
    <HeroSectionComponent/>
    <WorkPerksComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeroSectionComponent from '@/components/HomeViewComponents/HeroSectionComponent.vue';
import WorkPerksComponent from '../components/HomeViewComponents/WorkPerksComponent.vue'; //

export default defineComponent({
  name: 'heroSection',
  components: {
    HeroSectionComponent,
    WorkPerksComponent,
  },
});
</script>
