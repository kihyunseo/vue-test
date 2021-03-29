import bus from '../utlis/bus.js';

export default {
  //
  created() {
    bus.$emit('start:spinner');

    this.$store
      .dispatch('FETCH_LIST', this.$route.name)
      .then(() => {
        console.log('gg');
        bus.$emit('end:spinner');
      })
      .catch((error) => {
        console(error);
      });
  },
};
