import store from '../store';

export default {
    namespaced: true,
    state: {
        user: {},
        token: ''
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setToken(state, token) {
            state.token = token;
        },
    },
    actions: {
        setUser({commit}, user) {
            commit('setUser', user)
        },
        setToken({commit}, token) {
            commit('setToken', token)
        },
        async register({commit}, user) {
            commit('setErrors', 'clear');
            const response = await store.dispatch(
                'requestFetch',
                {
                    path: `/api/auth/users`,
                    method: 'GET',
                    data: user
                });
            console.log(response)
            return response;
        },

    },
    getters: {
        getUser(state) {
            return state.user;
        },
        getToken(state) {
            return state.token;
        }
    }

}