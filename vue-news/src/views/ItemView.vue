<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <UserProfile :info="fetchedItem">
        <div slot="username">
          {{fetchedItem.id}}
        </div>
        <template slot="usercreated">
          {{fetchedItem.created}}
        </template>
      </UserProfile>
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    const itemNumber = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemNumber);
  },
};
</script>

<style></style>
