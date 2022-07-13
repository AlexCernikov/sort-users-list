<template>
    <NavBarComponent />
    <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBarComponent from './components/CommonComponents/NavBarComponent.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'navBarComponent',
  components: {
    NavBarComponent,
  },
});
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
