<template>
    <div>
      <b-modal
        v-model="showModal"
        ref="modal"
        title="Edit User"
        header-bg-variant="light"
        body-bg-variant="light"
        footer-bg-variant="light"
        ok-title="Edit"
        :ok-disabled="handleValidLogIn"
        @show="resetModal"
        @hidden="resetModal"
        @ok="updateUser">
        <b-container>
          <b-form-group
            label="First Name For Update"
            label-for="firstName-input"
            :state="firstNameState">
          <b-form-input
            id="firstName-input"
            v-model="enteredFirstName"
            :placeholder="userForUpdate?.firstname"
            :state="firstNameState"
            required></b-form-input>
          </b-form-group>
          <b-form-group
            label="Last Name For Update"
            label-for="lastName-input"
            :state="lastNameState">
          <b-form-input
            id="lastName-input"
            v-model="enteredLastName"
            :placeholder="uId"
            :state="lastNameState"
            required></b-form-input>
          </b-form-group>
        </b-container>
      </b-modal>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { constants } from '../../../public/_globalConsts';
import {useAdminUserStore} from '../../stores/useAdminUserStore';

export default defineComponent({
  props: {
    show: Boolean,
    userForUpdate: {
      type: Object,
    },
    updateU: {
      type: Object,
    },
    uId:null,
  },
  data() {
    return {
      passwordFormat: constants.passwordRegex,
      emailFormat: constants.emailRegex,
      enteredFirstName: '',
      enteredLastName: '',
      enteredPassword: '',
      chkEnteredPasword: '',
      enteredEmail: '',
      update: Object,
    };
  },
  methods: {
    resetModal() {
      this.enteredFirstName = '';
      this.enteredLastName = '';
      this.enteredPassword = '';
      this.chkEnteredPasword = '';
      this.enteredEmail = '';
      this.$emit('cancel');
    },
    handleCancel() {
      this.$emit('cancel');
    },
    updateUser() {
      this.$emit('onUserUpdate', {
        email: this.userForUpdate?.email,
        firstName: this.enteredFirstName,
        lastName: this.enteredLastName,
        id: this.userForUpdate?.id,
        role: this.userForUpdate?.role,
      });
      console.log('USERFORUPDATE', this.userForUpdate?.firstname);
    },

  },
  computed: {
    showModal() {
      console.log(this.show);
      return this.show;
    },
    firstNameState() {
      return this.enteredFirstName.length > 1;
    },
    lastNameState() {
      return this.enteredLastName.length > 1;
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
  },
});
</script>

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
