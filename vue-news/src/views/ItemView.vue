<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <div>
        <div>
          사용자 프로필
        </div>
        <div>
          <router-link :to="`/user/${fetchedItem.user}`">{{
            fetchedItem.user
          }}</router-link>
        </div>
        <h2>{{ fetchedItem.title }}</h2>
      </div>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
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
