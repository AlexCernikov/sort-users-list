<template>
    <div class="faq__item">
           {{}}
             </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FaqComponent',
  props: {
    faq: {
      type: Array,
    },
  },
});
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
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
