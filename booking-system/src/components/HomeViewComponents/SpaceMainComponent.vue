<template>
<!-- eslint-disable max-len -->
 <section class="our-spaces">
    <div class="container">
        <div class="our-spaces__top">
        <h3 class="our-spaces__title">Our Spaces </h3>
        <p class="our-spaces__text"> Our space is designed to give you a different experience when working with your team or personally </p>
        </div>
    <div class="space">
      <SpaceItemComponent :space="space" />
    </div>
    </div>
    <SpaceItemComponent v-for="item in space" :key="item"/>
 </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import SpaceItemComponent from '@/components/HomeViewComponents/SpaceItemComponent.vue';

export default defineComponent({
  components: {
    SpaceItemComponent,
  },
  data() {
    return {
      space: [
        {
          id: 1,
          name: 'Shared Table',
          description: 'Comfortable place wich you can take for a long period of time',
          imgUrl: 'image1.png',
        },
        {
          id: 2,
          name: 'Private Space',
          description: 'Comfortable place wich you can take for a long period of time',
          imgUrl: 'image2.png',
        },
        {
          id: 3,
          name: 'Meeting Room',
          description: 'Comfortable place wich you can take for a long period of time',
          imgUrl: 'image3.png',
        },
      ],
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
.container{
    width: 1100px;
    margin: auto;
}
a{
  text-decoration: none;
}
.our-spaces{
  padding: 55px 0 55px;
  &__top{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__title{
    font-family: 'Roboto Condensed';
        font-size: 40px;
        font-style: normal;
        color: #231F20;
        font-weight: 700;
        line-height: 61px;
  }
  &__text{
    width: 452px;
    text-align: right;
    font-family: 'Lato';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 28px;
  }
}
.space{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
}
</style>
