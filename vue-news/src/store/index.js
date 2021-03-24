import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then((response) => {
          context.commit('SET_NEWS', response.data);
        })
        .cathch((error) => {
          console(error);
        });
    },
    FETCH_ASKS(context) {
      fetchAskList()
        .then((response) => {
          context.commit('SET_NEWS', response.data);
        })
        .cathch((error) => {
          console(error);
        });
    },
    FETCH_JOBS(context) {
      fetchJobsList()
        .then((response) => {
          context.commit('SET_NEWS', response.data);
        })
        .cathch((error) => {
          console(error);
        });
    },
  },
});
