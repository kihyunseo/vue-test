<template>
  <div>
    <div v-for="user in users" v-bind:key="user.title">
      {{user.title}}
    </div>
    
  </div>
</template>

<script>
import {fetchJobsList} from '../api/index.js';
export default {
data() {
  return {
    users: []
  }
},
created() {
  fetchJobsList()
  .then(response => this.users= response.data)
  /*
    .then(function(response){
      console.log(response);
      vm.users = response.data;
    })
    
    .catch(function(error) {
      console.log(error);
    })
    */
   .catch(error => console.log(error));
},

};
</script>

<style></style>
