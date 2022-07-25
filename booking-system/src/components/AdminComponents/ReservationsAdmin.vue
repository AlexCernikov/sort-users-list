<template>
  <section>
    <h1>Reservation List</h1>
    <button @click="getToken()">Token</button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  data() {
    return {
      token: '',
    };
  },
  methods: {
    getToken() {
      const body = {
        email: 'anonymous@isd.com',
        password: 'qwe123',
      };
      const token = Buffer.from(`${body.email}:${body.password}`, 'utf-8').toString('base64');
      axios.post('http://135.181.104.18:8081/user/authenticate', { body }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.data.token) {
            localStorage.setItem('token', JSON.stringify(response.data));
          }
          console.log(response.data.token);
          return response.data;
        });
    },
  },
});
</script>

<style scoped lang="scss">

</style>
