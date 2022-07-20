<template>
  <div class="reviews">
    <div class="reviews__head">
      <div class="reviews__head__text">
        <div class="reviews__head__text__frame">
          <p>Reviews</p>
          <hr />
        </div>
        <h2>Why people prefer sharing tables to working from home or private spaces</h2>
      </div>
    </div>
    <Carousel class="reviews__carousel" :items-to-show="2.8" :wrap-around="true" snapAlign="start">
      <template #addons>
        <Navigation>
          <template #next>
            <img src="@/assets/arrow.svg" alt="forward" />
          </template>
          <template #prev>
            <img class="arrow__back" src="@/assets/arrow.svg" alt="back" />
          </template>
        </Navigation>
        <Pagination />
      </template>
      <Slide class="reviews__slide" v-for="(review, index) in reviewsProps" :key="index">
        <ReviewsCardComponent
          :key="index"
          :review="review.review"
          :src="review.src"
          :alt="review.alt"
          :name="review.name"
          :title="review.title"
        />
      </Slide>
    </Carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, getTransitionRawChildren } from 'vue';
import {
  Carousel, Navigation, Slide, Pagination,
} from 'vue3-carousel';
import ReviewsCardComponent from './ReviewsCardComponent.vue';
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'ReviewsComponent',
  components: {
    ReviewsCardComponent,
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },

  data() {
    return {
      totalVuePackages: null,
      reviewsProps: [
        {
          review:
            'In ac magna nulla. Proin risus sapien, ullamcorper eget rhoncus sed, varius eget ante. Nulla nec suscipit ex. Fusce porta massa a pellentesque interdum.',
          src: 'avatar1.svg',
          alt: 'user1',
          name: 'Pedro Ibanez',
          title: 'UI Designer at ISD',
        },
        {
          review:
            'Fusce nec dapibus justo. Cras quis nisi pretium sem tincidunt commodo quis vitae velit. Morbi vehicula eros eget lectus rutrum vehicula. Fusce aliquam dolor ipsum, nec auctor metus venenatis quis. Sed a scelerisque ex, eu mollis ipsum. Quisque elit ligula, venenatis sit amet est ac, iaculis vehicula erat. Phasellus nulla elit, efficitur sit amet molestie sit amet, sodales ac massa. Fusce commodo porta varius. Morbi id fermentum lorem, ut pharetra dolor.',
          src: 'avatar2.svg',
          alt: 'user2',
          name: 'Raymond Thual',
          title: 'Full-Stack developer at ISD',
        },
        {
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          src: 'avatar3.svg',
          alt: 'user3',
          name: 'Yuli Berlian',
          title: 'Java developer at ISD',
        },
        {
          review:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
          src: 'avatar2.svg',
          alt: 'user3',
          name: 'Yuli Berlian',
          title: 'Java developer at ISD',
        },
      ],
    };
  },
});
</script>

<style>
.arrow__back {
  transform: rotate(180deg);
}
</style>

<style scoped lang="scss">
@import '@/assets/fonts/fonts.scss';
$reviewBlack: #222831;
$aubergine: #231f20;

.reviews {
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem auto;
  &__carousel {
    margin-left: calc((100% - 1280px) / 2);
  }
  &__slide {
    padding-right: 2rem;
  }
  &__head {
    display: flex;
    width: 1280px;
    margin-bottom: 1rem;
    &__text {
      width: 37%;
      &__frame {
        display: flex;
        flex-direction: row;
        align-items: center;
        p {
          font-family: $lato;
          color: $reviewBlack;
          font-style: normal;
          font-weight: 500;
          font-size: 1.2rem;
          line-height: 2rem;
          margin-bottom: 0.5rem;
        }
        hr {
          width: 4.5rem;
          height: 0.1rem;
          background-color: $reviewBlack;
          margin: 0 0 0 1rem;
        }
      }
      h2 {
        font-family: $roboto;
        font-style: normal;
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 3rem;
        color: $aubergine;
        margin: 0;
      }
    }
  }
  // For tablet landscape and laptop
  @media screen and (max-width: 1366px) {
    .reviews__head {
      width: 80%;
    }
    .reviews__head__text {
      width: 50%;
    }
  }
  //For tablet portrait and phone
  @media screen and (max-width: 768px) {
    .reviews__head {
      width: 80%;
      margin-bottom: 4rem;
    }
    .reviews__head__text {
      width: 100%;
    }
  }
}
</style>
