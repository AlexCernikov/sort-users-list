<template>
  <div class="home">
    <HeroSectionComponent/>
    <SpaceMainComponent />
    <WorkPerksComponent />
    <FacilitiesComponent />
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import HeroSectionComponent from '@/components/HomeViewComponents/HeroSectionComponent.vue';
import SpaceMainComponent from '@/components/HomeViewComponents/SpaceMainComponent.vue';
import FacilitiesComponent from '@/components/HomeViewComponents/FacilitiesComponent.vue';
import WorkPerksComponent from '../components/HomeViewComponents/WorkPerksComponent.vue';

export default defineComponent({
  name: 'app',
  components: {
    HeroSectionComponent,
    SpaceMainComponent,
    WorkPerksComponent,
    FacilitiesComponent,
  },
});
</script>
