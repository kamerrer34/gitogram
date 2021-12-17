import * as api from '../../api'

export default {
    namespaced: true,
    state: {
        starred: {
            data: null
        }
    },
    mutations: {
        SET_STARRED: (state, starred) => {
            state.data = starred;
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
        }
    }
}