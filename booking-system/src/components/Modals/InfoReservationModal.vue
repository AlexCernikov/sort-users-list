<template>
    <div>
      <b-modal
        v-model="showModal"
        ref="edit_reservation_modal"
        title="Info"
        header-bg-variant="light"
        body-bg-variant="light"
        footer-bg-variant="light"
        @show="resetModal"
        @hidden="resetModal">
        <b-container fluid>
          <b-list-group>
            <b-list-group-item class="d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Entity</div>
                <b-list-group-item class="subListItem">{{ reservationInfo?.reservationEntity.name }}</b-list-group-item>
                <b-list-group-item class="subListItem">{{ reservationInfo?.reservationEntity.description }}</b-list-group-item>
                <b-list-group-item class="subListItem">{{ reservationInfo?.reservationEntity.type }}</b-list-group-item>
              </div>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">User</div>
                <b-list-group-item class="subListItem">{{ reservationInfo?.user.firstname }}</b-list-group-item>
                <b-list-group-item class="subListItem">{{ reservationInfo?.user.lastname }}</b-list-group-item>
                <b-list-group-item class="subListItem">{{ reservationInfo?.user.email }}</b-list-group-item>
                <b-list-group-item class="subListItem">{{ reservationInfo?.user.role }}</b-list-group-item>
              </div>
            </b-list-group-item>
            <b-list-group-item>
              <div class="fw-bold">From Date</div>
              {{ dateTime(reservationInfo?.fromDate) }}
            </b-list-group-item>
            <b-list-group-item>
              <div class="fw-bold">To Date</div>
              {{ dateTime(reservationInfo?.toDate) }}
            </b-list-group-item>
            <b-list-group-item>
              <div class="fw-bold">Price</div>
              {{ reservationInfo?.price }} $
            </b-list-group-item>
            <b-list-group-item>
              <div class="fw-bold">Description</div>
              {{ reservationInfo?.comment }}
            </b-list-group-item>
          </b-list-group>
        </b-container>
      </b-modal>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import moment from 'moment';
import '@vuepic/vue-datepicker/dist/main.css';
import '@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss';

export default defineComponent({
  props: {
    show: Boolean,
    reservationInfo: Object,
  },
  methods: {
    resetModal() {
      this.$emit('cancel');
    },
    handleCancel() {
      this.$emit('cancel');
    },
    dateTime(value) {
      return moment(value)
        .format('YYYY-MM-DD');
    },
  },
  computed: {
    showModal() {
      return this.show;
    },
  },
});
</script>

<style scoped lang="scss">
</style>

<style lang="scss">
@import '@/../public/styles.scss';

.subListItem {
  border: none;
}
.btn-primary {
    background-color: $orange;
    border: hidden;
    border-radius: 0;
}
.btn-secondary {
    border: hidden;
    border-radius: 0;
}
.btn-primary:hover {
    background-color: $orange;
    box-shadow: 4px 4px 8px #888888;
}
.btn-secondary:hover {
    box-shadow: 4px 4px 8px #888888;
}
.btn-primary:disabled, .btn-primary.disabled {
    background-color: #FF5A00;
}
</style>
