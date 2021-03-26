<template>
  <div>
    <p v-for="item in this.$store.state.news" v-bind:key="item.id">
      {{item.points || 0}}
      <template v-if="item.domain">
        <a :href="item.url">
          {{ item.title }}
        </a>
      </template>
      <template v-else>
        <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
      </template>
      
      <small>
        {{ item.time_ago }},
        <router-link v-if="item.user" :to="`/user/${item.user}`">
          {{ item.user }}
        </router-link>

        <a :href="item.url" v-else>
          {{item.domain}}
        </a>
      </small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    const name = this.$route.name;
    if (name === 'news'){
        this.$store.dispatch('FETCH_NEWS');
    }else if(name === 'ask'){
        this.$store.dispatch('FETCH_ASKS');
    }else if(name === 'jobs'){
        this.$store.dispatch('FETCH_JOBS');
    }
  },
}


</script>

<style>

</style>