<template>
  <header>
    <NavBarComponent/>
  </header>
  <div id="main">
    <div class="main-content">
      <router-view/>
      <MapComponent />
      <BecomeMemberComponent />
    </div>
  </div>
  <footer class="footer-bar">
    <FooterComponent/>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FooterComponent from '@/components/CommonComponents/FooterComponent.vue';
import MapComponent from '@/components/CommonComponents/MapComponent.vue';
import BecomeMemberComponent from '@/components/CommonComponents/BecomeMemberComponent.vue';
import NavBarComponent from './components/CommonComponents/NavBarComponent.vue';

export default defineComponent({
  name: 'navBarComponent',
  components: {
    NavBarComponent,
    MapComponent,
    BecomeMemberComponent,
    FooterComponent,
  },
});
</script>

<style lang="scss">
@use 'sass:math';
@import "./public/styles";

#app {
  font-family: 'Roboto Condensed', 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

header {
  width: 80%;
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
    width: 80%;
    margin: 0 auto;
    border-left: 1px solid black;
    border-right: 1px solid black;
  }
}

$baseFontSize: 16 !default;

@function rem($pixels, $context: $baseFontSize) {
  @return #{math.div($pixels, $context)}rem;
}
</style>
