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
        }
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
                console.log(err);
                throw err;
            }
        },
        async fetchReadme({ commit, getters }, { id, owner, repo }) {
            const curRepo = getters.getRepoById(id);
            if (curRepo.readme !== undefined) {
                return;
            }
            try {
                const { data } = await api.readme.getReadme({ owner, repo });
                commit('SET_README', { id, content: data });
            } catch (err) {
                console.log(err);
                throw err;
            }
        }
    }
}