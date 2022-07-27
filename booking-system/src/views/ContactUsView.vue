<script setup lang="ts">
import {useCounterStore} from '../store/useCounter';
// import {storeToRefs} from 'pinia';

const main = useCounterStore();
const {counter} = main;
// console.log('USERCOUNTERS   ', storeToRefs(useCounterStore().counter));
</script>

<template>
  <div class="contactUs">
    <h1>This is the "Contact Us" page. Under Development</h1>
    <h1>{{main.counter}}</h1>
    <button @click="main.addOne">clickMe</button>
    <button @click="main.showUsers">clickMe</button>
    <p>{{main.users}}}</p>
    
  </div>
</template>


