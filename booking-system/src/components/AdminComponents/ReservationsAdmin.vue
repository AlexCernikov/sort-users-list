<template>
  <section>
    <div class="title">
      <h1>Reservation List</h1>
      <button class="createBtn" @click="showCreate = !showCreate">
        Create Reservation
        <CreateReservationModal
          :show="showCreate"
          @cancel="handleCloseCreate"
          @ok="getReservations"/>
      </button>
    </div>
    <div class='table-responsive'>
      <table class='table'>
        <thead class='thead-light'>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Entity name</th>
          <th scope='col'>User Fullname</th>
          <th scope='col'>From Date</th>
          <th scope='col'>To Date</th>
          <th scope='col'></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for='(reservation) in reservations' :key='reservation.id'>
          <th scope='row'></th>
          <td>{{ reservation.reservationEntity?.name }}</td>
          <td>{{ `${reservation.user.firstname} ${reservation.user.lastname}` }}</td>
          <td>{{ dateTime(reservation.fromDate) }}</td>
          <td>{{ dateTime(reservation.toDate) }}</td>
          <td>
            <div class='reservation__btns'>
              <button type='button'>
                <span class='material-icons' @click='infoRes(reservation.id)'
                      @keyup='infoRes(reservation.id)'>info</span>
                <InfoReservationModal
                  v-if="reservation.id === selectedID"
                  :reservationInfo="reservation"
                  :show="showInfo"
                  @cancel="handleCloseInfo"/>
              </button>
              <button type='button'>
                <span class='material-icons' @click='editRes(reservation.id)'
                      @keyup='editRes(reservation.id)'>edit</span>
                <EditReservationModal
                  v-if="reservation.id === selectedID"
                  :initialReservation="reservation"
                  :show="showEdit"
                  @cancel="handleCloseEdit"
                  @ok="getReservations"/>
              </button>
              <button type='button'>
                <span class='material-icons' @click='deleteQuestion(reservation.id)'
                      @keyup='deleteQuestion(reservation.id)'>delete</span>
                <DeleteModal
                  v-if="reservation.id === selectedID"
                  :show="showDelete"
                  @cancel="handleCloseDelete"
                  @ok="deleteRes(selectedID)"/>
              </button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import EditReservationModal from '../Modals/EditReservationModal.vue';
import CreateReservationModal from '../Modals/CreateReservationModal.vue';
import InfoReservationModal from '../Modals/InfoReservationModal.vue';
import DeleteModal from '../Modals/DeleteModal.vue';
import axios from 'axios';
import moment from 'moment';

export default defineComponent({
  components: {
    EditReservationModal,
    CreateReservationModal,
    InfoReservationModal,
    DeleteModal,
},
  data() {
    return {
      showEdit: false,
      showInfo: false,
      showDelete: false,
      selectedID: '',
      showCreate: false,
      reservations: [],
      token: '',
    };
  },
  mounted() {
    this.getToken();
    this.getReservations();
  },
  methods: {
    handleCloseEdit() {
      this.showEdit = false;
    },
    handleCloseCreate() {
      this.showCreate = false;
      this.getReservations();
    },
    handleCloseInfo() {
      this.showInfo = false;
    },
    handleCloseDelete() {
      this.showDelete = false;
    },
    editRes(reservationID) {
      this.selectedID = reservationID;
      this.showEdit = !this.showEdit;
    },
    infoRes(reservationID) {
      this.selectedID = reservationID;
      this.showInfo = !this.showInfo;
    },
    deleteQuestion(reservationID) {
      this.selectedID = reservationID;
      this.showDelete = !this.showDelete;
    },
    dateTime(value) {
      return moment(value)
        .format('YYYY-MM-DD, hh:mm');
    },
    getToken() {
      axios.post('http://135.181.104.18:8081/user/authenticate', {
        email: 'anonymous@isd.com',
        password: 'qwe123',
      })
        .then((response) => {
          if (response.data.token) {
            this.token = response.data.token;
            localStorage.setItem('token', this.token);
          }
        });
    },
    getReservations() {
      axios.get('http://135.181.104.18:8081/reservations', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then((response) => {
          if (response.data) {
            this.reservations = response.data;
          }
        });
    },
    deleteRes(id) {
      axios.delete(`http://135.181.104.18:8081/reservations/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then(() => {
          this.getReservations();
          this.selectedID='';
        });
    },
  },
});
</script>

<style scoped lang='scss'>
@import '@/../public/styles.scss';

section {
  width: 100%;
  padding: 2rem;
}
.createBtn {
  background-color: $brand-color;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
}
.createBtn:hover {
  background-color: $orange;
  box-shadow: 4px 4px 8px #888888;
  transition-duration: 0.5s;
}
.title {
  display: flex;
  justify-content: space-between;
  padding-bottom: 3rem;
}
.reservation {
  &__btns {
    button {
      background-color: transparent;
      background-repeat: no-repeat;
      border: 0;
    }
  }
}
</style>
