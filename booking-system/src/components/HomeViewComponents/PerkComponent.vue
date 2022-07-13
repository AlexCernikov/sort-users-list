<template>
  <div class="perk-container">
    <img :src="require('@/assets/' + src)" alt="{{alt}}" />
    <div class="text-container">
      <h1>{{ header }}</h1>
      <p>{{ description }}</p>
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
.perk-container {
  width: 275px;
  height: 117px;
  background-color: aquamarine;
}

.text-container {
}
</style>
