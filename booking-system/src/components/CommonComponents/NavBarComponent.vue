<template>
    <nav>
      <div class="nav">
        <div class="nav__logo">
          <router-link to="/">
            <img src="@/assets/ISD_Logo.svg" alt="ISD Logo" class="isd_logo">
          </router-link>
            <img
              src="@/assets/icon-menu.svg"
              alt="Menu Button"
              class="menuBtn"
              @click="toggle = !toggle"
              @keyup="toggle = !toggle">
        </div>
        <div class="nav__guest" :class="toggle ? mobile : ''">
          <div v-for="(navBtn, index) in navButtons" :key="index">
            <router-link
                :class="navBtn.path!=='/signUp' ? 'navButton' : 'navButton--sign'"
                :to="navBtn.path">{{ navBtn.name }}</router-link>
          </div>
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
      toggle: true,
      mobile: 'enable',
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
        {
          path: '/logIn',
          name: 'Log In',
        },
        {
          path: '/signUp',
          name: 'Sign Up',
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
  padding: 0 1rem;
  width: 100%;
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
  .menuBtn {
    display: none;
  }
  &__guest {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
  }
}

  @media (max-width: 992px) {
 .nav {
  display: flex;
  padding: 0 0.8rem;
  flex-direction: column;

  .navButton {
    font-size: toRem(15);
  }
  &__logo {
    width: auto;
    margin-bottom: 5px;
    align-self: flex-start;
  }
  &__guest{
    align-self: flex-end;
  }
  .isd_logo {
    width: 110px;
    height: auto;
  }
}
}

@media (max-width: 768px) {
.nav {
  display: block;
  width: 100%;
  padding: 0;
  margin: 0 auto 20px;

  .navButton {
    display: block;
    background-color: #2c3e50;
    color: #FFFFFF;
    padding: 5px 0;
    &--sign {
      @extend .navButton;
      background-color: #231F20;
      padding: 12px 0;
      margin: 5px 0 0;
    }
  }
  .navButton--sign:hover {
    transition-duration: 0.5s;
      background-color: #FF5A00;
  }
  .isd_logo {
    width: 73px;
    height: auto;
  }
  &__logo {
    display: flex;
    justify-content: space-between;
    margin: 15px auto;
    padding-right: 15px;
  }
  &__guest {
    display: none;
    margin: 0;
    padding: 0;
  }
  .enable {
      display: block;
    }
  .menuBtn {
    display: inline-block;
  }
}
}
</style>
