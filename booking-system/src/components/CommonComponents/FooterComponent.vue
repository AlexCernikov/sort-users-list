<template>
  <div class="footer-container">
    <div class="info-section">
      <img src="./ISD_Logo.svg" alt="ISD_Logo">
    </div>
    <div class="links-section">

    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped lang="scss">
$footer-color: #030303;

.footer-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: $footer-color;

  .info-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
}
</style>
