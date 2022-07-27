<script setup lang="ts">
import {useAdminUserStore} from '../store/useUserStore';
import {storeToRefs} from 'pinia';

const main = useAdminUserStore();
//  const {users} = main;
 const {users} = storeToRefs(useAdminUserStore());

// console.log('USERCOUNTERS   ', storeToRefs(useCounterStore().counter));
</script>

<template>
  <div class="contactUs">
    <h1>This is the "Contact Us" page. Under Development</h1>
    <h1>{{main.counter}}</h1>
    <button @click="main.addOne">clickMe</button>
    <button @click="main.showUsers">clickMe</button>
    <div v-for="user in users" :key="user.id">
    <p>{{user.id}}</p>
    </div>
    
    
  </div>
</template>


