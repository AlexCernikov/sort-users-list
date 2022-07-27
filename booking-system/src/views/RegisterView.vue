<template>
  <section>
    <form @submit.prevent='register'>
      <div class='form-group'>
        <label for='exampleInputName1'>Name
          <input type='text' class='form-control' id='exampleInputName1'
                 aria-describedby='name1Help' placeholder='Enter firstname' v-model='firstname'>
        </label>
      </div>
      <div class='form-group'>
        <label for='exampleInputName2'>Name
          <input type='text' class='form-control' id='exampleInputName2'
                 aria-describedby='name2Help' placeholder='Enter lastname' v-model='lastname'>
        </label>
      </div>
      <div class='form-group'>
        <label for='exampleInputEmail1'>Email
          <input type='email' class='form-control' id='exampleInputEmail1'
                 aria-describedby='emailHelp' placeholder='Enter email' v-model='email'>
          <small id='emailHelp' class='form-text text-muted'>We'll never share your email with
            anyone
            else.</small>
        </label>
      </div>
      <div class='form-group'>
        <label for='exampleInputPassword1'>Password
          <input type='password' class='form-control' id='exampleInputPassword1'
                 placeholder='Password' v-model='password'>
        </label>
      </div>
      <button type='submit' class='btn btn-primary'>Register</button>
    </form>
  </section>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useUserStore } from '@/stores/UserStore';
import { storeToRefs } from 'pinia';
import { UserCreateModel } from '@/models/user.model';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

export default defineComponent({
  name: 'RegisterView',
  data() {
    return {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
    };
  },
  methods: {
    register() {
      userStore.register({
        email: this.email,
        password: this.password,
        firstname: this.firstname,
        lastname: this.lastname,
      } as UserCreateModel)
        .then(() => {
          this.$router.push({ name: 'home' });
        });
    },
  },
});
</script>

<style scoped lang='scss'>
</style>
