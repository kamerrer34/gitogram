import * as api from '../../api'

export default {
    namespaced: true,
    state: {
        repos: {
            data: []
        }
    },
    mutations: {
        SET_REPOS: (state, repos) => {
            state.data = repos;
        }
    },
    actions: {
        async fetchRepos({ commit }) {
            try {
                const { data } = await api.repos.getRepos();
                commit('SET_REPOS', data);
            } catch (err) {
                console.error(err);
                throw err;
            }
        }
    }
}