<template>
  <div class="home">
    <HeroSectionComponent/>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeroSectionComponent from '@/components/HomeViewComponents/HeroSectionComponent.vue';

export default defineComponent({
  name: 'heroSection',
  components: {
    HeroSectionComponent,
  },
});
</script>
