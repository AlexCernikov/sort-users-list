<template>
    <nav>
      <div class="nav">
        <div class="nav__logo">
          <router-link to="/">
            <img src="@/assets/ISD_Logo.svg" alt="ISD_Logo">
          </router-link>
        </div>
        <div class="nav__guest">
          <div v-for="(navBtn, index) in navButtons" :key="index">
            <router-link class="navButton" :to="navBtn.path">{{ navBtn.name }}</router-link>
          </div>
        </div>
        <div class="nav__profile">
          <router-link to="/logIn" class="navButton">Log in</router-link>
          <router-link to="/signUp" class="navButton--sign">Sign Up</router-link>
        </div>
      </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBarComponent',
  data() {
    return {
      navButtons: [
        {
          path: '/',
          name: 'Home',
        },
        {
          path: '/bookSpace',
          name: 'Book a Space',
        },
        {
          path: '/spaceOptions',
          name: 'Space Options',
        },
        {
          path: '/benefits',
          name: 'Benefits',
        },
        {
          path: 'reviews',
          name: 'Reviews',
        },
        {
          path: '/contactUs',
          name: 'Contact Us',
        },
      ],
    };
  },
});
</script>

<style scoped lang="scss">
@function toRem($value) {
    $remValue: ($value / 16) + rem;
    @return $remValue;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px auto;
  max-width: 1280px;

  .navButton {
    display: inline-block;
    text-decoration: none;
    align-items: center;
    text-align: center;
    color: #2c3e50;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: toRem(16);
    line-height: toRem(28);
    padding: 0 10px;
    width: auto;
    &--sign {
      @extend .navButton;
      white-space: nowrap;
      background-color: #231F20;
      box-shadow: 0 4px 16px rgba(255, 87, 34, 0.32);
      color: #FFFFFF;
      padding: 12px 20px;
      margin-left: 15px;
    }
  }
  .navButton:hover {
      border-bottom: 2px solid #2c3e50;
    }
  .navButton--sign:hover {
    transition-duration: 0.5s;
      background-color: #FF5A00;
  }

  &__logo {
    width: auto;
  }

  &__guest {
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
  }

  &__profile {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: auto;
  }
}
</style>
