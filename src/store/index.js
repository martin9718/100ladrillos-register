import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
import store from "../store";

const ls = new SecureLS({
  isCompression: false
});
Vue.use(Vuex)


import auth from "./auth";


export default new Vuex.Store({
  state: {
    url_api: 'https://frontend-recruiting.100ladrillos.com',
  },
  plugins: [createPersistedState({
    storage: {
      getItem: (key) => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: (key) => ls.remove(key)
    }
  })],
  mutations: {
  },
  actions: {
    async requestFetch({commit}, options) {
      const myHeaders = new Headers();

      myHeaders.append("Authorization", store.getters["auth/getToken"]);
      myHeaders.append("Content-Type", "application/json");


      const requestOptions = {
        method: options.method,
        mode: 'cors',
        headers: myHeaders,
        body: JSON.stringify(options.data) || null,
        redirect: 'follow'
      };

      try {
        const response = await fetch(`${store.getters['getUrlApi']}${options.path}`, requestOptions);
        const data = await response.json();

        if (data.code) throw data.code;
        return data;
      } catch (error) {
        console.log(error);
        return {error};
      }
    }
  },

  modules: {
    auth,
  }
  ,
  getters: {
    getUrlApi(state) {
      return state.url_api;
    },
  }
})