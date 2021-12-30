import * as api from '../../api'

export default {
    namespaced: true,
    state: {
        trends: {
            data: []
        }
    },
    mutations: {
        SET_TRENDS: (state, trends) => {
            state.data = trends;
        },
        SET_README: (state, payload) => {
            state.data = state.data.map(repo => {
                if (payload.id === repo.id) {
                    repo.readme = payload.content
                }
                return repo;
            })
        },
        SET_FOLLOW: (state, payload) => {
            state.data = state.data.map(repo => {
                if (payload.id === repo.id) {
                    repo.follow = !repo.follow
                }
                return repo;
            })
        },
        SET_FOLLOW_LOAD: (state, payload) => {
            state.data = state.data.map(repo => {
                if (payload.id === repo.id) {
                    repo.followLoad = payload.load
                }
                return repo;
            })
        },
    },
    getters: {
        getRepoById: (state) => (id) => {
            return state.data.find(item => item.id === id);
        }
    },
    actions: {
        async fetchTrends({ commit }) {
            try {
                const { data } = await api.trends.getTrends();
                commit('SET_TRENDS', data.items);
            } catch (err) {
                console.error(err);
                throw err;
            }
        },
        async fetchReadme({ commit, getters }, { id, owner, repo }) {
            const curRepo = getters.getRepoById(id);
            if (curRepo.readme !== undefined) {
                return;
            }
            try {
                const { data } = await api.repos.getReadme({ owner, repo });
                commit('SET_README', { id, content: data });
            } catch (err) {
                console.error(err);
                throw err;
            }
        },
        async fetchFollow({ commit }, { id, owner, repo, method }) {
            commit('SET_FOLLOW_LOAD', { id, load: true });
            try {
                await api.starred.follow({ owner, repo, method });
                commit('SET_FOLLOW', { id });
            } catch (err) {
                console.error(err);
                throw err;
            } finally {
                commit('SET_FOLLOW_LOAD', { id, load: false });
            }
        }
    }
}