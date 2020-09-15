import Vue from 'vue'
import Vuex from 'vuex'

import {login_handler,register_handler} from '@/handlers/auth/auth_handler'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
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
      state.username = username;
    }
  },
  actions: {
    login({ commit }, credentials) {
      return login_handler(credentials)
          .then(({success,username}) => {
            if(success){
              commit('setLoggedIn',username);

              return Promise.resolve();
            }

            return Promise.reject();
          });
    }
  }
})
