<template>
    <div class="space__item" v-for="item in space" :key="item">
      <div class="space__img">
<img class="space__images"
              :src="require(`@/assets/spacesection/` + item.imgUrl)" alt="image">
      </div>
              <a class="space__link" href="#">
                <div class="space__button">
                  <img class="space__svg" src="../../assets/spacesection/arrow.svg" alt="svg">
                </div>
                <div class="space__hover">
                  <div class="space__hover-front">
                    <img class="space__hover-lines"
                    src="../../assets/spacesection/lines.svg" alt="lines">
                  <h6 class="space__hover-title">
                 {{item.name}}
                </h6>
               <p class="space__hover-text">
                {{item.description}}
               </p>
               <button class="space__hover-btn">Check avaibility
                    <img class="space__hover-svg"
                    src="../../assets/spacesection/arrow.svg" alt="svg">
                  </button>
                  </div>
             </div>
              </a>
             <div class="space__info">
               <p class="space__info-text">
                {{item.name}}
               </p>
               </div>
             </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'spaceSectionComponent',
  props: {
    space: {
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
.space{
  &__item{
    position: relative;
    width: 350px;
    height: 467px;
  }
  &__info-text{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #222831;
    margin: 20 0;
  }
  &__button{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    bottom: 48px;
    width: 72px;
    height: 72px;
    background-color: #ff5a00;
  }
    &__link:hover{
      .space__hover{
      opacity: 1;
      z-index: 1;
      }
    }
  &__svg{
    width: 15.5px;
    height: 10px;
  }
  &__img{
    width: 350px;
    height: 419px;
  }
  &__images{
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  &__hover{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #231F20;
    color:#ffffff;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    z-index: -1;
    transition: all .6s;
  }
  &__hover-front{
    background-color: rgba(16, 55, 92, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 70px 40px;
  }
  &__hover-lines{
    position: absolute;
    top: 10px;
    right: 10px;
    opacity: 0.5;
  }
  &__hover-title{
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
  }
  &__hover-text{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
  }
  &__hover-btn{
    position: absolute;
    background-color: chocolate;
    width: 252px;
    height: 72px;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
  }
  &__hover-svg{
    padding-left: 30px;
  }
}
</style>
