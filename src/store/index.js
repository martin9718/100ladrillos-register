import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
import store from "../store";
import auth from "./auth";

const ls = new SecureLS({
  isCompression: false
});

Vue.use(Vuex);

const success_codes = [200, 201];

export default new Vuex.Store({
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
    async requestFetch({commit}, {path, method, data, authentication = true }) {
      const myHeaders = new Headers();

      if(authentication){
        myHeaders.append("Authorization", store.getters["auth/getToken"]);
      }

      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: method,
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
      };

      try {
        const response = await fetch(`/api${path}`, requestOptions);

        const body = await response.json();

        if(!success_codes.includes(response.status)){
          //HANDLE ERROR
          return false;
        }

        return body;

      } catch (error) {
        console.log(error);
        //HANDLE ERROR
        return false;
      }
    }
  },

  modules: {
    auth,
  }
  ,
  getters: {}
})