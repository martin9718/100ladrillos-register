import store from '../store';

export default {
    namespaced: true,
    state: {
        user: {},
        token: '',
        steps: 1
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setToken(state, token) {
            state.token = token;
        },
        setSteps(state, steps) {
            state.steps = steps;
        },
    },
    actions: {
        setUser({commit}, user) {
            commit('setUser', user)
        },
        setToken({commit}, token) {
            commit('setToken', token)
        },
        setSteps({commit}, steps) {
            commit('setSteps', steps)
        },
        async register({commit}, user) {
            console.log(user);
            const response = await store.dispatch(
                'requestFetch',
                {
                    path: '/api/signUp',
                    method: 'POST',
                    data: {email: user.email, password: user.password}
                }
                );
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
        },
        getSteps(state) {
            return state.steps;
        }
    }

}