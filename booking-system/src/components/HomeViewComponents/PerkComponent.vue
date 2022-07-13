<template>
    <div class="perk-container">
        <img alt="table" />
        <div class="text-container">
            <h1>10+</h1>
            <p>alo</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PerkComponent',
  props: {
    icon: {
      src: String,
        }
    }
});
</script>

<style lang="scss">
.perk-container {
    width: 275px;
    height: 117px;
    background-color: aquamarine;
}

.text-container {}
</style>
