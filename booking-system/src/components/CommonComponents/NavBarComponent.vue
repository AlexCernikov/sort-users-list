<template>
  <nav>
    <div class='nav'>
      <div class='nav__logo'>
        <router-link to='/'>
          <img src='@/assets/ISD_Logo.svg' alt='ISD Logo' class='isd_logo'>
        </router-link>
        <img
          src='@/assets/icon-menu.svg'
          alt='Menu Button'
          class='menuBtn'
          @click='toggle = !toggle'
          @keyup='toggle = !toggle'>
      </div>
      <div class='nav__guest' :class="toggle ? mobile : ''">
        <router-link class='navButton' to='/'>
          Home
        </router-link>
        <router-link v-if='loggedIn' class='navButton' to='/myBookings'>
          My Bookings
        </router-link>
        <router-link class='navButton' to='/contactUs'>
          Contact Us
        </router-link>
          <button v-if='!loggedIn' class='navButton' @click='showLogIn = !showLogIn'>
            Log In
            <LogInModal
              :show='showLogIn'
              @onUserSubmit='handleLogIn'
              @cancel='handleCloseLogIn' />
          </button>
          <button v-if='!loggedIn' class='navButton--sign' @click='showSignUp = !showSignUp'>
            Sign Up
            <SignUpModal
              :show='showSignUp'
              @onUserSubmit='handleSignUp'
              @cancel='handleCloseSignUp' />
          </button>
        <button v-else type='button' class='navButton--sign' @click='handleLogout'>
          Logout
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { authComputed } from '@/stores/helpers';
import LogInModal from '../Modals/LogInModal.vue';
import SignUpModal from '../Modals/SignUpModal.vue';
import { useUserStore } from '@/stores/UserStore';

export default defineComponent({
  name: 'NavBarComponent',
  components: {
    LogInModal,
    SignUpModal,
  },
  data() {
    return {
      showLogIn: false,
      showSignUp: false,
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
          path: '/myBookings',
          name: 'My Bookings',
        },
        {
          path: '/contactUs',
          name: 'Contact Us',
        },
      ],
    };
  },

  methods: {
    async handleLogIn(data: { email: string; password: string }) {
      const userStore = useUserStore();
      await userStore.login({
        email: data.email,
        password: data.password,
      })
        .then(() => {
          this.$router.push({ name: 'home' });
        });
      await userStore.getCurrentUser();
      this.showLogIn = false;
    },
    handleSignUp(data: { email: string, password: string, firstname: string; lastname: string }) {
      const userStore = useUserStore();
      userStore.register({
        email: data.email,
        password: data.password,
        firstname: data.firstname,
        lastname: data.lastname,
      })
        .then(() => {
          this.$router.push({ name: 'home' });
        });
      this.showSignUp = false;
    },
    handleLogout() {
      const userStore = useUserStore();
      userStore.logout();
    },
    handleCloseLogIn() {
      this.showLogIn = false;
    },
    handleCloseSignUp() {
      this.showSignUp = false;
    },
  },
  computed: {
    ...authComputed,
  },
});
</script>

<style scoped lang='scss'>
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
    border: none;
    background-color: #FFFFFF;

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
    border-bottom: 2px solid #FF5A00;
  }

  .navButton--sign:hover {
    transition-duration: 0.5s;
    background-color: #FF5A00;
  }

  &__logo {
    align-self: flex-start;
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
    padding: 0 0.6rem;

    .navButton {
      font-size: toRem(14);
      padding: 0 5px;

      &--sign {
        padding: 12px 20px;
      }
    }

    &__logo {
      width: auto;
      margin-bottom: 5px;
      align-self: flex-start;
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
      width: 100%;
      margin: 0 auto;

      &--sign {
        @extend .navButton;
        background-color: #231F20;
        padding: 12px 0;
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
