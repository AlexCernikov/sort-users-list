<template>
  <section>
    <h1>Reservation List</h1>
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
        <tr v-for='reservation in reservations' :key='reservation.id'>
          <th scope='row'></th>
          <td>{{ reservation.reservationEntity?.name }}</td>
          <td>{{ `${reservation.user.firstname} ${reservation.user.lastname}` }}</td>
          <td>{{ dateTime(reservation.fromDate) }}</td>
          <td>{{ dateTime(reservation.toDate) }}</td>
          <td>
            <div class='reservation__btns'>
              <button type='button'>
                <span class='material-icons'>info</span>
              </button>
              <button type='button'>
                <span class='material-icons' @click='editRes(reservation.id)'
                      @keyup='editRes(reservation.id)'>edit</span>
              </button>
              <button type='button'>
                <span class='material-icons' @click='deleteRes(reservation.id)'
                      @keyup='deleteRes(reservation.id)'>delete</span>
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
import axios from 'axios';
import moment from 'moment';

export default defineComponent({
  data() {
    return {
      reservations: [{
        fromDate: null,
        toDate: null,
        price: 0,
        reservationEntity: {
          name: '',
        },
        user: {
          firstname: '',
          lastname: '',
        },
        comment: '',
      }],
      token: '',
    };
  },
  mounted() {
    this.getToken();
    this.getReservations();
  },
  methods: {
    dateTime(value) {
      return moment(value)
        .format('YYYY-MM-DD, hh:mm');
    },
    getToken() {
      axios.post('http://135.181.104.18:8081/user/authenticate', {
        email: 'dca@isd.com',
        password: 'test',
      })
        .then((response) => {
          if (response.data.token) {
            this.token = response.data.token;
            localStorage.setItem('token', this.token);
            console.log(response.data.token);
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
            console.log(this.reservations);
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
        });
    },
  },
});
</script>

<style scoped lang='scss'>
section {
  width: 100%;
  padding: 2rem;
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
