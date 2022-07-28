<template>
<div class="hero--container__wrapper">
  <div class="hero--container">
    <div class="hero--top">
      <h2><span>Book</span> a perfect spot in the office</h2>
      <p class="hero--description">Lorem</p>
    </div>
    <div class="hero--bot">
        <div class="hero--bot--form">
          <form @submit.prevent="handleSubmit" @change="checkInput">
              <p v-if="showError">Please enter all data</p>
              <label for="space-type">
                <select name="space-type" id="space-type" v-model="this.type">
                  <option value="" disabled selected hidden>Select Space Type</option>
                  <option v-for="(type,index) in entityTypeSet" :key="index">{{type}}</option>
                </select>
              </label>

            <label for="space-name">
              <select name="space-name" id="space-name" :value="this.name" @change="event => this.name = event.target.value">
                <option value="" selected disabled hidden>{{this.type ? '' : 'Choose Type First'}}</option>
              <option v-for="(item,index) in filter(this.type)" :key="index" >{{item.name}}</option>

              </select>
            </label>

            <CalendarComponent  @date-picked='registerDate'/>

            <button type="submit">submit</button>
            <div>
            </div>
          </form>
        </div>
        <div class="img-background">
          <img src="@/assets/900x600_img.png" alt="office_image">
        </div>

    </div>
  </div>
</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CalendarComponent from './CalendarComponent.vue';
import axios from 'axios'
import { EntityModel } from '@/models/entity.model';

export default defineComponent({
  name: 'HeroSectionComponent',
  data() {
    return {
      token: '',
      Entities: [] as EntityModel[],
      EntitiesNames: [] as string[],
      type: '',
      date: '',
      name: '',
      showError: false,
      entityTypeSet: new Set(),
      // We use a set because it allows to keep only distinct values
    }
  },
  created(){
    // data and token fetch should be done @pinia, but for now we are going to use a placeholder function
     axios.post('http://135.181.104.18:8081/user/authenticate', {
      email: 'anonymous@isd.com',
      password: 'qwe123',
    })
      .then((response) => {
        if (response.data.token) {
          this.token = response.data.token;
          localStorage.setItem('token', this.token);
        }

      });
    axios.get('http://135.181.104.18:8081/reservationEntities', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        if (response.data) {
          this.Entities = response.data;
          for (let i=0; i<this.Entities.length; i++){
            this.EntitiesNames.push(this.Entities[i].name)
          }
          for (let i = 0; i<response.data.length; i++)
          {
            this.entityTypeSet.add(response.data[i].type)
          };
        }
      });
  },

  components: { CalendarComponent },
  methods: {
    filter(type: string) {
      // We filter Entities to only get the entries with a certain type
      return this.Entities.filter((item)=> item.type === type);
    },
    checkInput(){
      if (!this.type || !this.date || !this.name) {
        this.showError= false;
      }
    },
    handleSubmit() {
      if ( this.type && this.name && this.date ) {
        this.showError = false;
        let result = {type: this.type,
        name: this.name,
        dateFrom: this.date[0],
        dateTo: this.date[1]};
        this.type = '';
        this.name = '',
        this.date = '';
        console.log(result)
      }
      else {
        this.showError = true;
      }
    },
    registerDate(date) {
      this.date = date;
    }
  }

});
</script>

<style scoped lang="scss">

@import 'public/styles.scss';

.hero--container__wrapper {
  width: 100vw;
  display: flex;
  justify-content: center;
}
.hero--container {
  width: min(1280px, 90%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

span {
  color: $orange;
}

h2 {
  font-family: $roboto;
  color: $aubergine;
  font-weight: 700;
  font-size: 52px;
  line-height: 61px;
  margin-right: 50px;
  margin-top: 0;
  text-align: left;
  margin-left: 50px;
}

.hero--description {
  margin-top: 0;
  font-family: $lato;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-align: right;
  margin-right: 50px;
}

.hero--top {
  display: grid;
  grid-template-columns:50% 50%;
  width: 95%;
  margin: 20px 0;
}

.hero--bot {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}

.hero--bot--form{
  width: 400px;
  height: 500px;
  border: 2px solid red;
}


img {
  width: 400px;
}
</style>
