<template>
  <div class="home">
    <HeroSectionComponent/>
    <SpaceMainComponent />
    <FaqComponent />
    <WorkPerksComponent />
    <!-- <FaqComponent /> -->
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import HeroSectionComponent from '@/components/HomeViewComponents/HeroSectionComponent.vue';
import SpaceMainComponent from '@/components/HomeViewComponents/SpaceMainComponent.vue';
import FaqComponent from '@/components/HomeViewComponents/FaqComponent.vue';
import WorkPerksComponent from '../components/HomeViewComponents/WorkPerksComponent.vue';

export default defineComponent({
  name: 'app',
  components: {
    HeroSectionComponent,
    SpaceMainComponent,
    FaqComponent,
    WorkPerksComponent,
    // FaqComponent,
  },
});
</script>
