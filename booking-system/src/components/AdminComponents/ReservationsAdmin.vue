/* eslint-disable */
<template>
  <h1>Reservations</h1>
  <button class='navButton' @click="showEdit = !showEdit">
    Edit Rezervation
    <EditRezervationModal
      :initialRezervation="rezervationToChange"
      :show="showEdit"
      @onUserSubmit="handleEdit"
      @cancel="handleCloseEdit"/>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EditRezervationModal from '../Modals/EditRezervationModal.vue';

export default defineComponent({
  components: {
    EditRezervationModal,
  },
  data() {
    return {
      showEdit: false,
      usersList: [],
      value: undefined,
      editedRezervation: {},
      rezervationToChange: {
        id: 4,
        fromDate: '2022-07-22T10:07:27.271+00:00',
        toDate: '2022-07-15T10:07:27.271+00:00',
        price: 103.50,
        reservationEntity: {
          id: 4,
          name: 'Employee Table #2',
          description: 'Test table 2',
          jsonOptions: '{}',
          type: 'TABLE',
          enabled: true,
        },
        user: {
          email: 'dca@isd.com',
          firstname: 'Dan',
          lastname: 'Carling',
          enabled: true,
          role: 'USER',
          id: 2,
        },
        comment: 'User reservation',
      },
    };
  },
  methods: {
    handleCloseEdit() {
      this.showEdit = false;
    },
    handleEdit(data: { rezervation: any }) {
      this.editedRezervation = data.rezervation;
    },
  },
});
</script>

<style scoped lang="scss">
</style>
