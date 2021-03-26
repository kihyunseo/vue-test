<template>
    <div>
        <slot name="username">

        </slot>
        <slot name="usercreated">
            
        </slot>

    </div>
</template>

<script>
export default {
    
    props: {
        info: Object
    }
    
    /*
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
    
  },
  */
}
</script>

<style>

</style>