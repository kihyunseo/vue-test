<template>
  <div>
    <p>{{ userInfo.id }}</p>
    <p>{{ userInfo.karma }}</p>
    <p>{{ userInfo.created }}</p>
  </div>
</template>

<script>
//import axios from 'axios';

export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
    //axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
  },
};
</script>

<style></style>
