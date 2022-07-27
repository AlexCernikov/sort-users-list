<template>
  <section>
    <form @submit.prevent='login'>
      <div class='form-group'>
        <label for='exampleInputEmail1'>Email
          <input type='email' class='form-control' id='exampleInputEmail1'
                 aria-describedby='emailHelp' placeholder='Enter email' v-model='email'>
        </label>
      </div>
      <div class='form-group'>
        <label for='exampleInputPassword1'>Password
          <input type='password' class='form-control' id='exampleInputPassword1'
                 placeholder='Password' v-model='password'>
        </label>
      </div>
      <button type='submit' class='btn btn-primary'>Login</button>
    </form>
  </section>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useUserStore } from '@/stores/UserStore';
import { storeToRefs } from 'pinia';
import { UserModel } from '@/models/user.model';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

export default defineComponent({
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      userStore.login({
        email: this.email,
        password: this.password,
      })
        .then(() => {
          this.$router.push({ name: 'home' });
        });
    },
  },
});
</script>

<style scoped lang='scss'>
</style>
