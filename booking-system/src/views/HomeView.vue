<template>
  <div class='home'>
    <GalleryComponent/>
    <HeroSectionComponent/>
    <SpaceMainComponent/>
    <WorkPerksComponent/>
  </div>
</template>

<script lang='ts'>

import { defineComponent } from 'vue';
import HeroSectionComponent from '@/components/HomeViewComponents/HeroSectionComponent.vue';
import SpaceMainComponent from '@/components/HomeViewComponents/SpaceMainComponent.vue';
import GalleryComponent from '@/components/HomeViewComponents/GalleryComponent.vue';
import WorkPerksComponent from '../components/HomeViewComponents/WorkPerksComponent.vue';

export default defineComponent({
  name: 'app',
  components: {
    GalleryComponent,
    HeroSectionComponent,
    SpaceMainComponent,
    WorkPerksComponent,
  },
});
</script>

<style scoped lang='scss'>

</style>
