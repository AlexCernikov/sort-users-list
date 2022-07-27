<template>
  <div class="wrapper">
    <div class="accordion accordion-main">
      <details class="accordion-item">
        <summary class="accordion accordion-title">
          <div class="container-summary">
            <div class="inner1"></div>
        <div class="inner1">{{user.firstname}}</div>
        <div class="inner1">{{user.lastname}}</div>
        <div class="inner1">{{user.email}}</div>
          </div>
         <div class="inner1-btn">
        <button
          @click="$emit('showDeleteUserItem', showDelete, this.user)"
          type="button"
          class="btn btn-secondary btn-item">
          Delete
          </button>
          <button :user="userForUpdate"
        @click="$emit('showUpdateUserItem', showUpdate, this.user)"
        type="button"
        class="btn btn-primary btn-item">
        Edit
        </button>
        </div>
        </summary>
        <ul class="accordion-list">
          <li class="li-inner">id#: {{user.id}}</li>
          <li class="li-inner">First Name: {{user.firstname}}</li>
          <li class="li-inner">Last Name: {{user.lastname}}</li>
          <li class="li-inner">Email: {{user.email}}</li>
          <li class="li-inner">Role: {{user.role}}</li>
        </ul>
      </details>
    </div>
  </div>
</template>

<script lang='ts' >
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserItem',
  props: {
    user: {
      type: Array,
    },
  },
  data() {
    return {
      showUpdate: true,
      showDelete: true,
    };
  },
});
</script>

<style scoped lang="scss">
.wrapper{
  display: flex;
  width: 100%;
}
.accordion{
  display:flex;
  width:750px;
  justify-content: space-between;
  align-items: center;
  }
  .accordion-item:last-of-type {
    border-bottom-right-radius: 0.0;
    border-bottom-left-radius: 0.0;
}
  .container-summary{
    display: flex;
  }
  .inner1{
    width: 150px;
  }
  .inner1:first-child{
    width: 40px;
  }
  .accordion-item{
    width: 100%;
    border: none;
    border-bottom: 1px solid gray;
  }
  .accordion-title{
    padding: 20px;
    width: 100%;
    font-size: 20px;
    border: none;
    position: relative;
    outline: none;
    transition: .5 all;
  }
  .btn-item{
    margin-left: 15px;
  }
  summary::-webkit-details-marker{
    display: none;
  }
  .li-inner{
    font-size: 16px;
    color: aliceblue;
    margin-top: 10px;
    padding: 5px;
  }
  .accordion-list{
    background-color: dimgray;
  }
  .accordion-title:hover{
    background-color: beige;
  }
  .accordion-item[open] .accordion-title::after{
    transform: translate(-50%) rotate(90deg);
  }
</style>
