import * as api from '../../api'

export default {
    namespaced: true,
    state: {
        user: {
            data: null
        }
    },
    mutations: {
        SET_USER: (state, user) => {
            state.data = user;
        }
    },
    actions: {
        async fetchUser({ commit }) {
            try {
                const { data } = await api.user.getUser();
                commit('SET_USER', data);
            } catch (err) {
                console.log(err);
                throw err;
            }
        }
    }
}