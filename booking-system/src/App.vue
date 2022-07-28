<template>
  <section class='home__page'>
    <header v-if='showSections()'>
      <NavBarComponent />
    </header>
    <div id='main'>
      <div class='main-content'>
        <router-view :isAdmin='isAdmin' />
        <MapComponent v-if='showSections()' />
        <BecomeMemberComponent v-if='showSections()' />
      </div>
    </div>
    <footer v-if='showSections()' class='footer-bar'>
      <FooterComponent />
    </footer>
  </section>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import FooterComponent from '@/components/CommonComponents/FooterComponent.vue';
import MapComponent from '@/components/CommonComponents/MapComponent.vue';
import BecomeMemberComponent from '@/components/CommonComponents/BecomeMemberComponent.vue';
import NavBarComponent from './components/CommonComponents/NavBarComponent.vue';
import { useUserStore } from '@/stores/UserStore';
import axios from 'axios';

export default defineComponent({
  name: 'navBarComponent',
  components: {
    NavBarComponent,
    MapComponent,
    BecomeMemberComponent,
    FooterComponent,
  },
  watch: {
    $route(to, from) {
      if (
        to.fullPath.includes('/admin')
        || to.fullPath.includes('/users')
        || to.fullPath.includes('/reservations')
        || to.fullPath.includes('/entities')
        || to.fullPath.includes('/settings')
      ) {
        this.isAdminRoute = true;
      } else {
        this.isAdminRoute = false;
      }
    },
  },
  data() {
    return {
      isAdmin: true,
      isAdminRoute: false,
    };
  },
  created() {
    const getUserData = localStorage.getItem('data');
    const getUserRole = localStorage.getItem('role');
    if (getUserData && getUserRole) {
      const userData = JSON.parse(getUserData);
      const userRole = getUserRole;
      const userStore = useUserStore();
      userStore.$state.user = userData;
      userStore.$state.role = userRole;
      localStorage.setItem('data', JSON.stringify(userData));
      localStorage.setItem('role', userRole);
      axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`;
      console.log('user token is: ', userData);
      console.log('user token is: ', userRole);
    }
  },
  methods: {
    showSections() {
      return !(this.isAdmin && this.isAdminRoute);
    },
  },
});
</script>

<style lang='scss'>
@use 'sass:math';
@import './public/styles';

#app {
  font-family: 'Roboto Condensed', 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

header {
  width: 100%;
  margin: 0 auto;
}

#main {
  position: relative;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 1;
  min-width: 0;

  .main-content {
    flex: 1;
    width: 100%;
    margin: 0 auto;
  }
}

$baseFontSize: 16 !default;

@function rem($pixels, $context: $baseFontSize) {
  @return #{math.div($pixels, $context)}rem;
}
</style>
