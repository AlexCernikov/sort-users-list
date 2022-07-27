<template>
  <div class="myBookings">
    <CalendarComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CalendarComponent from '@/components/HomeViewComponents/CalendarComponent.vue';

export default defineComponent({
  components: { CalendarComponent },
});
</script>

<style scoped lang="scss"></style>
