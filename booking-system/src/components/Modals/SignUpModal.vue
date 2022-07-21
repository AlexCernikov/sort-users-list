<template>
    <div>
      <b-modal
        v-model="showModal"
        ref="modal"
        title="Create your ISD Account"
        header-bg-variant="light"
        body-bg-variant="light"
        footer-bg-variant="light"
        ok-title="Sign Up"
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
            placeholder="set Username"
            :state="usernameState"
            required></b-form-input>
          </b-form-group>
          <b-form-group
            label="Email"
            label-for="email-input"
            :state="emailState">
          <b-form-input
            id="username-input"
            v-model="enteredEmail"
            placeholder="set Email"
            :state="emailState"
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
            placeholder="set Password"
            :state="passwordState"
            required></b-form-input>
          </b-form-group>
          <b-form-group
            label="Verify Password"
            label-for="chkPass-input"
            :state="chkPasswordState">
          <b-form-input
            id="chkPass-input"
            type="password"
            v-model="chkEnteredPasword"
            placeholder="check Password"
            :state="chkPasswordState"
            required></b-form-input>
          </b-form-group>
        </b-container>
      </b-modal>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { constants } from '../../../public/_globalConsts';

export default defineComponent({
  props: {
    show: Boolean,
  },
  data() {
    return {
      passwordFormat: constants.passwordRegex,
      emailFormat: constants.emailRegex,
      username: '',
      password: '',
      email: '',
      enteredUsername: '',
      enteredPassword: '',
      chkEnteredPasword: '',
      enteredEmail: '',
    };
  },
  methods: {
    resetModal() {
      this.enteredUsername = '';
      this.enteredPassword = '';
      this.chkEnteredPasword = '';
      this.enteredEmail = '';
      this.$emit('cancel');
    },
    handleCancel() {
      this.$emit('cancel');
    },
    handleSubmit() {
      this.username = this.enteredUsername.toLocaleLowerCase();
      this.password = this.enteredPassword;
      this.email = this.enteredEmail;
      this.$emit('onUserSubmit', { username: this.username, password: this.password, email: this.email });
    },
  },
  computed: {
    showModal() {
      return this.show;
    },
    usernameState() {
      return this.enteredUsername.length > 7;
    },
    passwordState() {
      return this.passwordFormat.test(this.enteredPassword);
    },
    chkPasswordState() {
      return (this.enteredPassword === this.chkEnteredPasword) && this.chkEnteredPasword.length > 0;
    },
    emailState() {
      return this.emailFormat.test(this.enteredEmail);
    },
    handleValidLogIn() {
      return !(
        this.usernameState && this.passwordState && this.emailState && this.chkPasswordState
      );
    },
  },
});
</script>

<style scoped lang="scss">
</style>

<style lang="scss">
@import '@/../public/styles.scss';

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
