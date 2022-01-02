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

      // myHeaders.append("Authorization", store.getters["auth/getToken"]);
      myHeaders.append("Access-Control-Allow-Origin", "*");
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: options.method,
        headers: myHeaders,
        mode: 'no-cors',
        body: options.data,
        redirect: 'follow'
      };

      console.log(requestOptions)

      try {
        const response = await fetch(`${store.getters['getUrlApi']}${options.path}`, requestOptions);
        const data = await response.json();


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