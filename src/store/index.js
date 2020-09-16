import Vue from 'vue'
import Vuex from 'vuex'

import {login_handler,register_handler} from '@/handlers/auth/auth_handler'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    isUserLoggedIn: false,
    allTopics: [],
    currentTopic: {
      id: '',
      title: '',
      posts: []
    }
  },
  getters: {
    getUsername: state => state.username,
    getAllTopics: state => state.allTopics,
    getTopicId: state => state.currentTopic.id,
    getTopicTitle: state => state.currentTopic.title,
    getPosts: state => state.currentTopic.posts
  },
  mutations: {
    setLoggedIn(state,username) {
      state.username = username
      state.isUserLoggedIn = true
    },
    setLoggedOut(state) {
      state.username = ''
      state.isUserLoggedIn = false;
    }
  },
  actions: {
    login({ commit }, credentials) {
      return login_handler(credentials)
          .then(res => {
            console.log(res);
            if(res.success === true){
              commit('setLoggedIn',res.username);

              return Promise.resolve(res);
            }

            return Promise.reject(res);
          });
    },
    register({commit},credentials) {
      return register_handler(credentials)
          .then(res => {
            if (res.success === true) return Promise.resolve(res);
            else return Promise.reject(res);
          });
    },
    logOut({commit}) {
      commit('setLoggedOut');
    }
  }
})
