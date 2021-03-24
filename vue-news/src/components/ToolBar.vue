<template>
  <div class="header">
      <router-link to="/news">News</router-link>
      <router-link to="/ask"> Ask</router-link>
      <router-link to="/Jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .header{
    display:flex;
    background-color:#42b883;
    padding:8px;
  }
  .header > a {
    padding:0 10px;
    color:white;
  }
  .header > .router-link-exact-active{
    font-weight: bold;
  }
</style>