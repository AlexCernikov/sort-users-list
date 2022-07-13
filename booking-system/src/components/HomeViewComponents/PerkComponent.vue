<template>
  <div class="perk-container">
    <img class="perk-image" :src="require('@/assets/' + src)" alt="{{alt}}" />
    <div class="text-container">
      <h1 class="perk-header">{{ header }}</h1>
      <p class="perk-description">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  name: 'PerkComponent',
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');

$lato: 'Lato', sans-serif;
$roboto: 'Roboto Condensed', sans-serif;

.perk-container {
  display: flex;
  width: 275px;
  height: 72px;
}

.perk-image {
  width: 32px;
  height: 32px;
  margin-top: 4px;
  margin-right: 24px;
}

.perk-header {
  font-size: 32px;
  line-height: 38px;
  font-weight: 400;
  font-family: $roboto;
  margin: 0;
  text-align: left;
}

.perk-description {
  font-family: $lato;
  font-style: normal;
  font-weight: 400;
  margin-top: 8px;
  color: #9a9a9a;
  text-align: left;
}
</style>
