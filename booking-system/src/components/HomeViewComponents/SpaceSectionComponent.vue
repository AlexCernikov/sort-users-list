<template>
<!-- eslint-disable max-len -->
 <section class="our-spaces">
    <div class="container">
        <div class="our-spaces__top">
 <h3 class="our-spaces__title">Our Spaces </h3>
        <p class="our-spaces__text"> Our space is designed to give you a different experience when working with your team or personally </p>
        </div>
    <div class="space">
        <a class="space__item" href="#">
              <img class=".space__images" src="../../assets/spacesection/image1.png" alt="image">
             <div class="space__info">
               <h6 class="space__info-title">
                 Truffaut literally trust
                </h6>
               <p class="space__info-text">
                Living room furntiture | Chair
               </p>
             </div>
            </a>
    </div>
    </div>

 </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'spaceSectionComponent',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.container{
    width: 80%;
    margin: auto;
}
.our-spaces{
  padding: 55px 0 55px;
  &__top{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__title{
    font-size: 40px;
    color: #231F20;
  }
}
</style>
