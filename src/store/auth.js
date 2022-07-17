import store from '../store';

export default {
    namespaced: true,
    state: {
        token: '',
        steps: 1
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setSteps(state, steps) {
            state.steps = steps;
        },
    },
    actions: {
        setToken({commit}, token) {
            commit('setToken', token)
        },
        setSteps({commit}, steps) {
            commit('setSteps', steps)
        },
        async register({commit}, user) {

            const response = await store.dispatch(
                'requestFetch',
                {
                    path: '/signUp',
                    method: 'POST',
                    data: {email: user.email, password: user.password},
                    authentication: false
                }
                );
            if(!response) return false;

            console.log(response.token)

            await store.dispatch('auth/setToken', 'bearer ' + response.token);
            return response;
        },
        async phoneNumber({commit}, phone) {
            const response = await store.dispatch(
                'requestFetch',
                {
                    path: '/phoneNumber',
                    method: 'POST',
                    data: {number: phone}
                }
            );

            return response;
        },
        async verifyPhoneNumber({commit}, digit) {
            const response = await store.dispatch(
                'requestFetch',
                {
                    path: '/phoneNumber/verify',
                    method: 'POST',
                    data: {token: digit}
                }
            );

            return response;
        },
        async profileName({commit}, {name, secondName, firstLastName, secondLastName}) {
            const response = await store.dispatch(
                'requestFetch',
                {
                    path: '/profile/name',
                    method: 'POST',
                    data: {name, secondName, firstLastName, secondLastName}
                }
            );

            return response;
        },
        async profile({commit}) {
            const response = await store.dispatch(
                'requestFetch',
                {
                    path: '/profile',
                    method: 'GET'
                }
            );

            return response;
        },

    },
    getters: {
        getToken(state) {
            return state.token;
        },
        getSteps(state) {
            return state.steps;
        }
    }

}