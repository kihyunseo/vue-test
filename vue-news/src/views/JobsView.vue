<template>
  <div>
    <div v-for="user in this.$store.state.news" v-bind:key="user.title">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
};
</script>

<style></style>
