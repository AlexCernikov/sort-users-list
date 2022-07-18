<template>
  <div class='home'>
    <GalleryComponent class='carousel' v-slot='{ currentSlide }'>
      <SlideComponent v-for='(slide, index) in carouselSlides' :key='index'>
        <div v-show='currentSlide === index + 1' class='slide-info'>
          <img :src='require(`@/assets/gallery/${slide}.jpg`)' alt='gallery-image' />
        </div>
      </SlideComponent>
    </GalleryComponent>
    <HeroSectionComponent />
    <SpaceMainComponent />
    <WorkPerksComponent />
  </div>
</template>

<script lang='ts'>

import { defineComponent } from 'vue';
import HeroSectionComponent from '@/components/HomeViewComponents/HeroSectionComponent.vue';
import SpaceMainComponent from '@/components/HomeViewComponents/SpaceMainComponent.vue';
import GalleryComponent from '@/components/HomeViewComponents/GalleryComponent.vue';
import SlideComponent from '@/components/HomeViewComponents/SlideComponent.vue';
import WorkPerksComponent from '../components/HomeViewComponents/WorkPerksComponent.vue';

export default defineComponent({
  name: 'app',
  components: {
    SlideComponent,
    HeroSectionComponent,
    SpaceMainComponent,
    WorkPerksComponent,
    GalleryComponent,
  },
  setup() {
    const carouselSlides = ['bg-1', 'bg-2', 'bg-3'];
    return { carouselSlides };
  },
});
</script>

<style scoped lang='scss'>
.carousel {
  position: relative;
  max-height: 100vh;
  height: 100vh;

  .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;

    img {
      min-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
