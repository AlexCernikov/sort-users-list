<template>
  <section class='carousel'>
    <slot :currentSlide='currentSlide' />
    <div class='navigate'>
      <div class='toggle-page left'>
        <i @click='prevSlide' @keyup='prevSlide' class='fa-solid fa-chevron-left'></i>
      </div>
      <div class='toggle-page right'>
        <i @click='nextSlide' @keyup='nextSlide' class='fa-solid fa-chevron-right'></i>
      </div>
    </div>
    <div class='pagination'>
      <span v-for='(slide, index) in getSlideCount'
            :key='index'
            :class='{active : index + 1 === currentSlide}'
            @click='goToSlide(index)' @keyup='goToSlide'>
      </span>
    </div>
  </section>
</template>

<script lang='ts'>
import { onMounted, ref } from 'vue';
/* eslint-disable */

export default {
  setup() {
    const currentSlide: any = ref(1);
    const getSlideCount: any = ref(null);
    const autoPlayEnabled = ref(true);
    const timeoutDuration = ref(5000);

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll('.slide').length;
    });

    const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };

    const prevSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = getSlideCount.value;
        return;
      }
      currentSlide.value -= 1;
    };

    const goToSlide = (index: number) => {
      currentSlide.value = index + 1;
    };

    const autoPlay = () => {
      setInterval(() => {
        nextSlide();
      }, timeoutDuration.value);
    };

    if (autoPlayEnabled.value) {
      autoPlay();
    }

    return {
      currentSlide,
      nextSlide,
      prevSlide,
      getSlideCount,
      goToSlide,
    };
  },
};
</script>

<style scoped lang='scss'>
.navigate {
  padding: 0 1rem;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  .toggle-page {
    display: flex;
    flex: 1;

    i {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-color: #FF5A00;
      color: #FFFFFF;
    }
  }

  .right {
    justify-content: flex-end;
  }
}

.pagination {
  position: absolute;
  bottom: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    cursor: pointer;
    width: 3rem;
    height: 0.25rem;
    background-color: #FFFFFF;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  .active {
    background-color: #FF5A00;
  }
}
</style>
