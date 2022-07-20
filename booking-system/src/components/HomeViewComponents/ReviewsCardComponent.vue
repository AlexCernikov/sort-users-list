<template>
  <div class="card">
    <p class="card__review">
      {{ review }}
    </p>
    <div class="card__author">
      <img :src="require('@/assets/' + src)" alt="{{alt}}" />
      <div class="card__author__identity">
        <p class="card__author__identity--name">{{ name }}</p>
        <p class="card__author__identity--title">{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ReviewsCardComponent',
  props: {
    review: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
@import '@/assets/fonts/fonts.scss';
$white: #ffffff;
$aubergine: #231f20;
.card {
  width: 100%;
  background-color: $aubergine;
  padding: 2.5rem;
  height: 24.5rem;
  .card__review {
    font-family: $lato;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.7rem;
    color: $white;
    height: 80%;
    text-align: left;
  }
  &__author {
    display: flex;
    margin-bottom: 2%;
    &__identity {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      &--name {
        font-family: $lato;
        font-style: normal;
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 1.7rem;
        color: $white;
        margin: 0;
      }
      &--title {
        font-family: $lato;
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.6rem;
        color: $white;
        margin: 0;
      }
    }
  }
}
</style>
