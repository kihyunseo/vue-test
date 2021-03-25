<template>
  <div>
    <p v-for="item in this.$store.state.news" v-bind:key="item.id">
      <a :href="item.url">
        {{item.title}}
      </a>
      <small>
        {{item.time_ago}},
        {{item.user}}
      </small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';



export default {
  computed: {
    ...mapGetters([
     'fetchedAsk'
    ]),

    /*
    ...mapGetters({
      askItems : 'fetchedAsk'
    }),
        
    ...mapState({
      ask: state => state.news
    })
    
    ask() {
      return this.$store.state.ask;
    }
    */
  },
  created() {
    this.$store.dispatch('FETCH_ASKS');
  },
};
</script>

<style></style>
