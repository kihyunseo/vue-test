import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then((response) => {
                context.commit('SET_NEWS', response.data);
            })
            .cathch((error) => {
                console(error);
            });
    },
    FETCH_ASKS({ commit }) {
        fetchAskList()
            .then(({ data }) => {
                commit('SET_NEWS', data);
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
}