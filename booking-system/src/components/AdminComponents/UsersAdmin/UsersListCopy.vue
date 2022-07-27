<script setup lang="ts">
import {useUsersStore} from '../../../store/useUserStore';
// import {storeToRefs} from 'pinia';

const main = useUsersStore();
const {counter} = main;
// console.log('USERCOUNTERS   ', storeToRefs(useCounterStore().counter));
</script>

<template>
  <div class="UsersList">  
    <h1>{{main.counter}}</h1>
    <button @click="main.addOne">clickMe</button>
    <button @click="main.showUsers">clickMe</button>
    <p>{{main.users}}}</p>
    
  </div>
</template>


