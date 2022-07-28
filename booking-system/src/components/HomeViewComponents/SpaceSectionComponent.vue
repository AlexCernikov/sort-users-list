<template>
<!-- eslint-disable max-len -->
 <section class="our-spaces">
    <div class="container">
      <div v-for="component in data">
      <SpaceSection name={{component.name}} />
      </div>
        <div class="our-spaces__top" v-on:click="showCards" v-on:keydown="showCards">
          title = {{name}} - {{msg}}
        <h3 class="our-spaces__title">Our Spaces </h3>
        <p class="our-spaces__text"> Our space is designed to give you a different experience when working with your team or personally </p>
        </div>
    <div class="space">
        <div class="space__item">
              <img class="space__images" src="../../assets/spacesection/image1.png" alt="image">
              <a class="space__link" href="#">
                <div class="space__button">
                  <img class="space__svg" src="../../assets/spacesection/arrow.svg" alt="svg">
                </div>
                <div class="space__hover">
                  <div class="space__hover-front">
                    <img class="space__hover-lines" src="../../assets/spacesection/lines.svg" alt="lines">
                  <h6 class="space__hover-title">
                 Private Space
                </h6>
               <p class="space__hover-text">
                Comfortable place wich you can take for a long period of time
               </p>
               <button class="space__hover-btn">Check avaibility
                    <img class="space__hover-svg" src="../../assets/spacesection/arrow.svg" alt="svg">
                  </button>
                  </div>
             </div>
              </a>
             <div class="space__info">
               <p class="space__info-text">
                Shared table
               </p>
             </div>
            </div>
            <div class="space__item">
              <img class="space__images" src="../../assets/spacesection/image1.png" alt="image">
              <a class="space__link" href="#">
                <div class="space__button">
                  <img class="space__svg" src="../../assets/spacesection/arrow.svg" alt="svg">
                </div>
                <div class="space__hover">
                  <div class="space__hover-front">
                    <img class="space__hover-lines" src="../../assets/spacesection/lines.svg" alt="lines">
                  <h6 class="space__hover-title">
                 Private Space
                </h6>
               <p class="space__hover-text">
                Comfortable place wich you can take for a long period of time
               </p>
               <button class="space__hover-btn">Check avaibility
                    <img class="space__hover-svg" src="../../assets/spacesection/arrow.svg" alt="svg">
                  </button>
                  </div>
             </div>
              </a>
             <div class="space__info">
               <p class="space__info-text">
                Shared table
               </p>
             </div>
            </div>
            <div class="space__item">
              <img class="space__images" src="../../assets/spacesection/image1.png" alt="image">
              <a class="space__link" href="#">
                <div class="space__button">
                  <img class="space__svg" src="../../assets/spacesection/arrow.svg" alt="svg">
                </div>
                <div class="space__hover">
                  <div class="space__hover-front">
                    <img class="space__hover-lines" src="../../assets/spacesection/lines.svg" alt="lines">
                  <h6 class="space__hover-title">
                 Private Space
                </h6>
               <p class="space__hover-text">
                Comfortable place wich you can take for a long period of time
               </p>
               <button class="space__hover-btn">Check avaibility
                    <img class="space__hover-svg" src="../../assets/spacesection/arrow.svg" alt="svg">
                  </button>
                  </div>
             </div>
              </a>
             <div class="space__info">
               <p class="space__info-text">
                Shared table
               </p>
             </div>
            </div>
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
    name: String,
    description: String,
  },
  data() {
    const data = [
      {
        name: 'Shared table',
        description: 'Description',
        imageUrl: ''
      }
    ];
    const showCards = () => {
      console.log('cards');
    };
    return {
      showCards,
      data
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
.our-spaces{
  padding: 55px 0 55px;
  &__top{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__title{
    font-family: 'Roboto Condensed';
        font-size: 40px;
        font-style: normal;
        color: #231F20;
        font-weight: 700;
        line-height: 61px;
  }
  &__text{
    width: 452px;
    text-align: right;
    font-family: 'Lato';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 28px;
  }
}
.space{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
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
