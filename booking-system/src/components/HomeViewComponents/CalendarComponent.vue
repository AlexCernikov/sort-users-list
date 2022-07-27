<template>
  <div class="calendar">
    <Datepicker
      v-model="date"
      @update:modelValue="handleUpdate"
      autoApply
      range
      :minDate="new Date()"
      :enableTimePicker="false"
      :spaceConfirm="true"
      :disabledDates="disabled"
      placeholder="Select Date"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default defineComponent({
  name: 'CalendarComponent',
  components: { Datepicker },
  data() {
    return {
      date: [],
      dateFrom: '',
      dateTo: '',
      disabled: ['2022-07-29T10:07:27.271+00:00', '2022-07-30T10:07:27.271+00:00'],
    };
  },
  create() {
    const date = ref(new Date());
  },
  methods: {
    handleUpdate() {
      [this.dateFrom, this.dateTo] = this.date;
      console.log(this.dateFrom);
    },
  },
});
</script>

<style scoped lang="scss">
@import 'public/styles.scss';

.calendar {
  margin: 4rem;
  width: 25%;
}
</style>
