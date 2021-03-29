import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItemNumber,
  fetchList,
} from '../api/index.js';

export default {
  FETCH_NEWS({ commit }) {
    return fetchNewsList()
      .then(({ data }) => {
        commit('SET_NEWS', data);
        return data;
      })
      .catch((error) => console.log(error));
  },
  FETCH_ASKS({ commit }) {
    return fetchAskList()
      .then(({ data }) => {
        commit('SET_NEWS', data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_JOBS(context) {
    return fetchJobsList()
      .then((response) => {
        context.commit('SET_NEWS', response.data);
      })
      .catch((error) => console.log(error));
  },

  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then(({ data }) => {
        commit('SET_LIST', data);
      })
      .catch((error) => console.log(error));
  },

  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .cathch((error) => {
        console.log(error);
      });
  },
  FETCH_ITEM({ commit }, name) {
    return fetchItemNumber(name)
      .then(({ data }) => {
        commit('SET_ITEM', data);
      })
      .cathch((error) => {
        console.log(error);
      });
  },
};
