import * as api from '../../api'

export default {
    namespaced: true,
    state: {
        repos: {
            data: [],
            load: false
        }
    },
    mutations: {
        SET_REPOS: (state, repos) => {
            state.data = repos;
        },
        SET_REPOS_LOAD: (state, payload) => {
            state.load = payload.load;
        },
    },
    actions: {
        async fetchRepos({ commit }) {
            commit('SET_REPOS_LOAD', { load: true });
            try {
                const { data } = await api.repos.getRepos();
                commit('SET_REPOS', data);
                commit('SET_REPOS_LOAD', { load: false });

            } catch (err) {
                console.error(err);
                throw err;
            } finally {
                commit('SET_REPOS_LOAD', { load: false });
            }
        }
    }
}