<template>
  <header></header>
  <div id="main">
    <div id="container-1" class="custom-container">
      <div class="main-content">
        Hello World
      </div>
    </div>
    <router-view/>
  </div>
  <footer class="footer-bar">
    <div class="copyright">
    </div>
  </footer>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

  > .custom-container {
    position: relative;
    width: 100%;
    min-height: 0;
    min-width: 0;
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
  }

  .main-content {
    flex: 1;
    width: 70%;
    margin: auto;
  }
}

$baseFontSize: 16 !default;
</style>
