<template>
  <div class='home'>
    <GalleryComponent/>
    <HeroSectionComponent/>
    <SpaceMainComponent/>
    <FaqComponent/>
    <WorkPerksComponent/>
    <FacilitiesComponent/>
  </div>
</template>

<script lang='ts'>

import { defineComponent } from 'vue';
import HeroSectionComponent from '@/components/HomeViewComponents/HeroSectionComponent.vue';
import SpaceMainComponent from '@/components/HomeViewComponents/SpaceMainComponent.vue';
import GalleryComponent from '@/components/HomeViewComponents/GalleryComponent.vue';
import FaqComponent from '@/components/HomeViewComponents/FaqComponent.vue';
import FacilitiesComponent from '@/components/HomeViewComponents/FacilitiesComponent.vue';
import WorkPerksComponent from '../components/HomeViewComponents/WorkPerksComponent.vue';

export default defineComponent({
  name: 'app',
  components: {
    GalleryComponent,
    HeroSectionComponent,
    SpaceMainComponent,
    FaqComponent,
    WorkPerksComponent,
    FacilitiesComponent,
  },
});
</script>

<style scoped lang='scss'>

</style>
