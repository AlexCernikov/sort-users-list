<template>
  <section>
    <div class="gallery">
      <div class="gallery__navigation">
        <div class="gallery__navigation__item">
          <div class="gallery__navigation__item__title">
            <p>Our gallery</p>
            <hr>
          </div>
          <h2 class="gallery__navigation__item__description">Take a look how it is cool to work from
            office</h2>
          <div class="gallery__navigation__item__arrows">
            <i class="fa-solid fa-arrow-left-long"></i>
            <i class="fa-solid fa-arrow-right-long"></i>
          </div>
        </div>
      </div>
      <Carousel :items-to-show="3.2" :wrap-around="true" class='gallery__carousel'>
        <Slide v-for='(slide, index) in carouselSlides' :key="index"
               class="gallery__carousel__slide">
          <div class="gallery__carousel__item">
            <img :src='require(`@/assets/gallery/${slide}.jpg`)' alt='gallery-image'/>
          </div>
        </Slide>

        <template #addons>
          <navigation/>
          <pagination/>
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import {
  Carousel, Navigation, Pagination, Slide,
} from 'vue3-carousel';

export default defineComponent({
  name: 'GalleryComponent',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    const carouselSlides = ['bg-1', 'bg-2', 'bg-3', 'bg-1', 'bg-2', 'bg-3', 'bg-1', 'bg-2', 'bg-3'];
    return { carouselSlides };
  },
});
</script>

<style scoped lang="scss">
.gallery {
  width: 100%;

  &__carousel {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__slide {
      width: 300px;
      height: 250px;
    }

    &__item {
      margin-right: 1rem;
    }
  }

  &__navigation {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    &__item {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;

      &__title {
        width: 22%;
        display: flex;
        align-items: center;

        > p {
          width: 10rem;
          font-family: 'Lato', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1.25rem;
          line-height: 1.875rem;
          color: #222831;
        }

        hr {
          width: 6rem;
          height: 0.1rem;
          background-color: #222831;
        }
      }

      > h2 {
        width: 100%;
        margin-top: 0;
        font-family: 'Roboto Condensed', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 3rem;
        color: #231F20;
      }

      &__arrows {
        display: flex;
        gap: 1rem;
        justify-content: flex-start;

        i {
          color: #fe5c1f;
          font-size: 4rem;
        }
      }
    }
  }
}
</style>
