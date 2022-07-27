<template>
    <div>
      <b-modal
        v-model="showModal"
        ref="create_reservation_modal"
        title="Create new reservation"
        header-bg-variant="light"
        body-bg-variant="light"
        footer-bg-variant="light"
        ok-title="Create New"
        :ok-disabled="handleValidCreate"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleSubmit">
        <b-container fluid>
          <b-form-group
            label="Entity"
            label-for="entitiesList-input">
              <template #first>
                <b-form-select-option :value="null" disabled>
                  Please select a Entity
                </b-form-select-option>
              </template>
            <b-form-select
              v-model="selectedEntity"
              :state="stateEntity">
                <b-form-select-option
                  v-for="entity in entitiesList"
                  :key="entity"
                  :value="entity">
                    {{ `${entity.type} -> ${entity.name}` }}
                </b-form-select-option>
            </b-form-select>
          </b-form-group>
          <b-form-group
            label="Users"
            label-for="usersList-input">
              <template #first>
                <b-form-select-option :value="null" disabled>
                  Please select a User
                </b-form-select-option>
              </template>
            <b-form-select
              v-model="selectedUser"
              :state="stateUser">
                <b-form-select-option
                  v-for="user in usersList"
                  :key="user"
                  :value="user">
                    {{ `${user.firstname} ${user.lastname}` }}
                </b-form-select-option>
            </b-form-select>
          </b-form-group>
          <b-form-group
          label="Date From"
          label-for="date_from-input">
            <Datepicker
              id="date_from-input"
              autoApply
              :disabledDates="disabledDates"
              placeholder="set reservation Start date"
              v-model="dateFrom"
              class="mb-2"
              :state="dateFromState"
              required>
            </Datepicker>
          </b-form-group>
          <b-form-group
            label="Date To"
            label-for="date_to-input">
          <Datepicker
            id="date_to-input"
            autoApply
            v-model="dateTo"
            placeholder="set reservation Start date"
            class="mb-2"
            :state="dateToState"
            required>
          </Datepicker>
          </b-form-group>
          <b-form-group
            label="Price"
            label-for="price-input">
          <b-form-input
            id="date_to-input"
            type="number"
            v-model="price"
            placeholder="set Price"
            required></b-form-input>
          </b-form-group>
          <b-form-group
            label="Description"
            label-for="description-input">
          <b-form-textarea
            id="description-input"
            v-model="description"
            placeholder="add a Comment"
            required></b-form-textarea>
          </b-form-group>
        </b-container>
      </b-modal>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import '@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss';

export default defineComponent({
  components: {
    Datepicker,
  },
  props: {
    show: Boolean,
  },
  data() {
    return {
      disabledDates: ['2022-07-22T10:07:27.271+00:00', '2022-07-15T10:07:27.271+00:00'],
      dateFrom: '',
      dateTo: '',
      price: null,
      description: '',
      selectedUser: {},
      selectedEntity: {},
      usersList: [],
      entitiesList: [],
    };
  },
  methods: {
    resetModal() {
      this.selectedUser = {};
      this.selectedEntity = {};
      this.dateFrom = '';
      this.dateTo = '';
      this.price = null;
      this.description = '';
      this.$emit('cancel');
    },
    handleCancel() {
      this.$emit('cancel');
    },
    handleSubmit() {
      axios({
        method: 'POST',
        url: 'http://135.181.104.18:8081/reservations/create',
        data: {
          fromDate: this.dateFrom,
          toDate: this.dateTo,
          price: this.price,
          reservationEntity: this.selectedEntity,
          user: this.selectedUser,
          comment: this.description,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then((response) => {
          console.log(response);
        });
    },
  },
  computed: {
    showModal() {
      return this.show;
    },
    stateEntity() {
      return !(Object.keys(this.selectedEntity).length === 0);
    },
    stateUser() {
      return !(Object.keys(this.selectedUser).length === 0);
    },
    dateFromState() {
      return JSON.stringify(this.dateFrom).length > 4;
    },
    dateToState() {
      return JSON.stringify(this.dateTo).length > 4;
    },
    handleValidCreate() {
      return !(this.stateEntity && this.stateUser && this.dateFromState && this.dateToState);
    }
  },
  mounted() {
    axios({
      method: 'GET',
      url: 'http://135.181.104.18:8081/user',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        this.usersList = response.data;
      });
    axios({
      method: 'GET',
      url: 'http://135.181.104.18:8081/reservationEntities',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        this.entitiesList = response.data;
      });
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
