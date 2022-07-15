<template>
    <div class="faq__item">
           
             </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FaqComponent',
  props: {
    name: {
      type: String,
    },
  },
});
</script>
<style scoped lang="scss">
.container{
    max-width: 1100px;
    margin: auto;
}
a{
  text-decoration: none;
}
.faq__item{
    border: 1px solid black;
    width: 350px;
    height: 170px;
}
</style>
