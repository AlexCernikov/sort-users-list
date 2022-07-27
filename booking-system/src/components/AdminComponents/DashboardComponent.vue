<template>
  <div class="dashboard__main">
    <div class="dashboard__statistics">
      <div class="grid__item">
        <div class="grid__icon">
          <span class="material-icons">account_circle</span>
        </div>
        <div class="grid_description">
          <h1 class="grid_description-data">{{ users }}</h1>
          <p class="grid_description-text">USERS</p>
        </div>
      </div>
      <div class="grid__item">
        <div class="grid__icon">
          <span class="material-icons">workspaces</span>
        </div>
        <div class="grid_description">
          <h1 class="grid_description-data">{{ entities }}</h1>
          <p class="grid_description-text">ENTITIES</p>
        </div>
      </div>
      <div class="grid__item">
        <div class="grid__icon">
          <span class="material-icons">calendar_month</span>
        </div>
        <div class="grid_description">
          <h1 class="grid_description-data">{{ totalReservations }}</h1>
          <p class="grid_description-text">RESERVATIONS</p>
        </div>
      </div>
    </div>
    <div class="dashboard__reservations">
      <h1>Reservations</h1>
      <table class="reservations_table">
        <thead>
          <tr>
            <th>Entity Name</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>User name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(reservation, index) in reservations" :key="index">
            <td>{{ reservation.reservationEntity.name }}</td>
            <td>{{ dateTime(reservation.fromDate) }}</td>
            <td>{{ dateTime(reservation.toDate) }}</td>
            <td>{{ `${reservation.user.firstname} ${reservation.user.lastname}` }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import moment from 'moment';

export default defineComponent({
  name: 'DashboardComponent',
  data() {
    return {
      users: '',
      token: '',
      entities: '',
      totalReservations: '',
      reservations: [],
    };
  },
  mounted() {
    this.getToken();
    this.getUsers();
    this.getEntities();
    this.getReservations();
  },
  methods: {
    dateTime(value) {
      return moment(value).format('YYYY-MM-DD, hh:mm');
    },
    getToken() {
      axios
        .post('http://135.181.104.18:8081/user/authenticate', {
          email: 'anonymous@isd.com',
          password: 'qwe123',
        })
        .then((response) => {
          this.token = response.data.token;
          localStorage.setItem('token', this.token!);
        });
    },
    getUsers() {
      axios
        .get('http://135.181.104.18:8081/user', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          this.users = response.data.length;
        });
    },
    getEntities() {
      axios
        .get('http://135.181.104.18:8081/reservationEntities', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          this.entities = response.data.length;
        });
    },
    getReservations() {
      axios
        .get('http://135.181.104.18:8081/reservations', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          this.totalReservations = response.data.length;
          this.reservations = response.data;
        });
    },
  },
});
</script>

<style scoped lang="scss">
@import 'public/styles.scss';
.dashboard__main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 2rem;
  .dashboard__statistics {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin-bottom: 5rem;
    .grid__item {
      background-color: $bunker;
      padding: 1rem;
      display: flex;
      align-items: center;
      width: 25%;
      border-radius: 1rem;
    }
    .grid__icon {
      .material-icons {
        font-size: 3rem;
        color: $white;
      }
    }
    .grid_description {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      &-data {
        font-family: $roboto;
        font-weight: 900;
        color: $orange;
      }
      &-text {
        color: $white;
        transition: 0.2s ease-out;
        font-size: 1rem;
      }
      &:hover,
      &.router-link-exact-active {
        background-color: $aubergine;
        .material-icons,
        .text {
          color: $orange;
        }
      }
    }
  }
  .dashboard__reservations {
    width: 100%;
  }
  table {
    width: 100%;
  }
}
</style>
