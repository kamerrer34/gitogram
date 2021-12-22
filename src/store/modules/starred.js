import * as api from '../../api'

export default {
    namespaced: true,
    state: {
        starred: {
            data: []
        }
    },
    mutations: {
        SET_STARRED: (state, starred) => {
            state.data = starred;
        },
        SET_ISSUES: (state, payload) => {
            state.data = state.data.map(repo => {
                if (payload.id === repo.id) {
                    repo.issues = payload.content;
                }
                return repo;
            })
        },
        SET_ACTIVE_ISSUE: (state, id) => {
            state.data = state.data.map(repo => {
                if (id === repo.id) {
                    repo.active = !repo.active;
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
        async fetchStarred({ commit }) {
            try {
                const { data } = await api.starred.getStarred();
                commit('SET_STARRED', data);
            } catch (err) {
                console.log(err);
                throw err;
            }
        },
        async fetchIssues({ commit, getters }, { id, owner, repo }) {
            const curRepo = getters.getRepoById(id);
            if (curRepo.issues !== undefined) {
                return;
            }
            try {
                const { data } = await api.repos.getIssues({ owner, repo });
                commit('SET_ISSUES', { id, content: data });
            } catch (err) {
                console.log(err);
                throw err;
            }
        }
    }
}