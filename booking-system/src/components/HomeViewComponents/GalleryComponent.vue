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
      <Carousel :items-to-show="4" :wrap-around="true"
                class='carousel'>
        <Slide v-for='(slide, index) in carouselSlides' :key="index"
               class="carousel__slide">
          <div class="carousel__item">
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
          border: 1px solid #222831;
        }
      }

      > h2 {
        width: 100%;
        margin-top: 0.2rem;
        margin-bottom: 2rem;
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
        padding-bottom: 2rem;

        i {
          color: #fe5c1f;
          font-size: 3rem;
        }
      }
    }
  }

  .carousel {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__slide {
      width: 400px;
      height: 400px;
      right: 15rem;
    }

    &__item {
      display: flex;
      width: 420px;
      height: 350px;
      margin-right: 1rem;
    }
  }
}
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 1;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.5);
  z-index: 2;
}
</style>
