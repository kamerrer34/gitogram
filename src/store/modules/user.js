import * as api from '../../api'

export default {
    namespaced: true,
    state: {
        user: {
            data: null,
            load: false
        }
    },
    mutations: {
        SET_USER: (state, user) => {
            state.data = user;
        },
        SET_USER_LOAD: (state, payload) => {
            state.load = payload.load;
        },
    },
    actions: {
        async fetchUser({ commit }) {
            commit('SET_USER_LOAD', { load: true });
            try {
                const { data } = await api.user.getUser();
                commit('SET_USER', data);
                commit('SET_USER_LOAD', { load: false });
            } catch (err) {
                console.error(err);
                throw err;
            } finally {
                commit('SET_USER_LOAD', { load: false });
            }
        }
    }
}