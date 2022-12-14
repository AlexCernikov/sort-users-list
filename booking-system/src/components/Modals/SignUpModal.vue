<template>
  <div>
    <b-modal
      v-model='showModal'
      ref='modal'
      title='Create your ISD Account'
      header-bg-variant='light'
      body-bg-variant='light'
      footer-bg-variant='light'
      ok-title='Sign Up'
      :ok-disabled='handleValidLogIn'
      @show='resetModal'
      @hidden='resetModal'
      @ok='handleSubmit'>
      <b-container>
        <b-form-group
          label='Email'
          label-for='email-input'
          :state='emailState'>
          <b-form-input
            id='email-input'
            v-model='enteredEmail'
            placeholder='set Email'
            :state='emailState'
            required></b-form-input>
        </b-form-group>
        <b-form-group
          label='First Name'
          label-for='firstName-input'
          :state='firstNameState'>
          <b-form-input
            id='firstName-input'
            v-model='enteredFirstName'
            placeholder='set First Name'
            :state='firstNameState'
            required></b-form-input>
        </b-form-group>
        <b-form-group
          label='Last Name'
          label-for='lastName-input'
          :state='lastNameState'>
          <b-form-input
            id='lastName-input'
            v-model='enteredLastName'
            placeholder='set Last Name'
            :state='lastNameState'
            required></b-form-input>
        </b-form-group>
        <b-form-group
          label='Password'
          label-for='pass-input'
          :state='passwordState'>
          <b-form-input
            id='pass-input'
            type='password'
            v-model='enteredPassword'
            placeholder='set Password'
            :state='passwordState'
            required></b-form-input>
        </b-form-group>
        <b-form-group
          label='Verify Password'
          label-for='chkPass-input'
          :state='chkPasswordState'>
          <b-form-input
            id='chkPass-input'
            type='password'
            v-model='chkEnteredPassword'
            placeholder='check Password'
            :state='chkPasswordState'
            required></b-form-input>
        </b-form-group>
      </b-container>
    </b-modal>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { constants } from '@/../public/_globalConsts';

export default defineComponent({
  props: {
    show: Boolean,
  },
  data() {
    return {
      enteredFirstName: '',
      enteredLastName: '',
      enteredPassword: '',
      chkEnteredPassword: '',
      enteredEmail: '',
    };
  },
  methods: {
    resetModal() {
      this.enteredFirstName = '';
      this.enteredLastName = '';
      this.enteredPassword = '';
      this.chkEnteredPassword = '';
      this.enteredEmail = '';
      this.$emit('cancel');
    },
    handleCancel() {
      this.$emit('cancel');
    },
    handleSubmit() {
      this.enteredEmail = this.enteredEmail.toLocaleLowerCase();
      this.$emit('onUserSubmit', {
        firstname: this.enteredFirstName,
        lastname: this.enteredLastName,
        password: this.enteredPassword,
        email: this.enteredEmail,
      });
    },
  },
  computed: {
    showModal() {
      return this.show;
    },
    firstNameState() {
      return this.enteredFirstName.length > 1;
    },
    lastNameState() {
      return this.enteredLastName.length > 1;
    },
    passwordState() {
      return constants.passwordRegex.test(this.enteredPassword);
    },
    chkPasswordState() {
      return (this.enteredPassword === this.chkEnteredPassword) && this.chkEnteredPassword.length > 0;
    },
    emailState() {
      return constants.emailRegex.test(this.enteredEmail);
    },
    handleValidLogIn() {
      return !(
        this.firstNameState && this.passwordState && this.emailState
        && this.chkPasswordState && this.lastNameState
      );
    },
  },
});
</script>

<style lang='scss'>
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
