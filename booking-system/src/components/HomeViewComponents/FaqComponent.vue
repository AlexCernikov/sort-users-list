<template>
<!-- eslint-disable max-len -->
 <section class="faq">
    <div class="faq__container">
        <div class="faq__top">
        <h3 class="faq__title">Find the answers to anything you need in our Help Center</h3>
        </div>
    <div class="faq__dir">
      <FaqItemComponent
      v-for="(item, index) in faq"
          :key="index"
          :name="faq.name">
          </FaqItemComponent>
    </div>
    </div>
 </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import FaqItemComponent from '@/components/HomeViewComponents/FaqItemComponent.vue';

export default defineComponent({
  components: {
    FaqItemComponent,
  },
  data() {
    return {
      faq: [
        {
          id: 1,
          name: 'How do I know if a space is available?',
        },
        {
          id: 2,
          name: 'Private Space',
        },
        {
          id: 3,
          name: 'Meeting Room',
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
.faq{
    &__title{
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    text-align: center;
    width: 578px;
   margin: 115px auto 62px;
    color: #231F20;
    }
}
</style>
