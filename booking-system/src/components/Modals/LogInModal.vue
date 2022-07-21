<!-- Calling this component will return the following data:
    entered Username as variable: "username",
    entered Password as variable: "password"
 -->
<template>
    <div>
      <b-modal
        v-model="showModal"
        ref="modal"
        title="Enter your Log In credentials"
        header-bg-variant="light"
        body-bg-variant="light"
        footer-bg-variant="light"
        ok-only=true
        ok-title="Log In"
        :ok-disabled="handleValidLogIn"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleSubmit">
        <b-container>
          <b-form-group
            label="Userame"
            label-for="username-input"
            :state="usernameState">
          <b-form-input
            id="username-input"
            v-model="enteredUsername"
            placeholder="enter Username"
            :state="usernameState"
            required></b-form-input>
          </b-form-group>
          <b-form-group
            label="Password"
            label-for="pass-input"
            :state="passwordState">
          <b-form-input
            id="pass-input"
            type="password"
            v-model="enteredPassword"
            placeholder="enter Password"
            :state="passwordState"
            required></b-form-input>
          </b-form-group>
        </b-container>
      </b-modal>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    show: Boolean,
  },
  data() {
    return {
      username: '',
      password: '',
      enteredUsername: '',
      enteredPassword: '',
    };
  },
  methods: {
    resetModal() {
      this.enteredUsername = '';
      this.enteredPassword = '';
      this.$emit('cancel');
    },
    handleCancel() {
      this.$emit('cancel');
    },
    handleSubmit() {
      this.username = this.enteredUsername;
      this.password = this.enteredPassword;
      this.$emit('onUserSubmit', { username: this.username, password: this.password });
    },
  },
  computed: {
    showModal() {
      return this.show;
    },
    usernameState() {
      // eslint-disable-next-line
      return this.enteredUsername.length > 5 ? true : false;
    },
    passwordState() {
      // eslint-disable-next-line
      return this.enteredPassword.length > 5 &&  this.enteredPassword.length < 15  ? true : false;
    },
    handleValidLogIn() {
      // eslint-disable-next-line
      return this.usernameState && this.passwordState ? false : true;
    },
  },
});
</script>

<style scoped lang="scss">
</style>
