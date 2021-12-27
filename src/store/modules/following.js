import * as api from '../../api'

export default {
    namespaced: true,
    state: {
        following: {
            data: []
        }
    },
    mutations: {
        SET_FOLLOWING: (state, following) => {
            state.data = following;
        },
        SET_FOLLOW: (state, payload) => {
            state.data = state.data.map(following => {
                if (payload.id === following.id) {
                    following.follow = !following.follow
                }
                return following;
            })
        },
        SET_FOLLOW_LOAD: (state, payload) => {
            state.data = state.data.map(following => {
                if (payload.id === following.id) {
                    following.follow_load = payload.load
                }
                return following;
            })
        },
    },
    actions: {
        async fetchFollowing({ commit }) {
            try {
                const { data } = await api.user.getFollowing();
                commit('SET_FOLLOWING', data);
            } catch (err) {
                console.log(err);
                throw err;
            }
        },
        async fetchFollow({ commit },{ id, user, method }) {
            console.log(id, user, method);
            commit('SET_FOLLOW_LOAD', { id, load: true });
            try {
                await api.user.follow({ user, method });
                console.log('1');
                commit('SET_FOLLOW', { id });
            } catch (err) {
                console.log(err);
                throw err;
            } finally {
                commit('SET_FOLLOW_LOAD', { id, load: false });
            }
        }
    }
}