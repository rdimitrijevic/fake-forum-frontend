import Vue from 'vue'
import Vuex from 'vuex'

import {login_handler,register_handler} from '@/handlers/auth/auth_handler'
import {create_topic, fetch_all_topics} from "@/handlers/topic/topic_handler";
import {getAsTopicUIModels} from "@/models/responses/topic/TopicUIResponse";
import {SuccessfulTopicResponse} from "@/models/responses/topic/TopicResponse";
import {create_post, fetch_all_posts} from "@/handlers/post/post_handler";
import {getAsPostUIModels} from "@/models/responses/post/PostUIResponse";
import {SuccessfulPostResponse} from "@/models/responses/post/PostResponse";

import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

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
        isUserLoggedIn: state => state.isUserLoggedIn,
        getUsername: state => state.username,
        getAllTopics: state => state.allTopics,
        getTopicId: state => state.currentTopic.id,
        getTopicTitle: state => state.currentTopic.title,
        getPosts: state => state.currentTopic.posts
    },
    mutations: {
        setLoggedIn(state, username) {
            state.username = username
            state.isUserLoggedIn = true
        },
        setLoggedOut(state) {
            state.username = ''
            state.isUserLoggedIn = false
            Vue.cookie.delete('user-token');
        },
        setTopics(state, topics) {
            state.allTopics = topics.reverse()
        },
        setCurrentTopic(state, topic) {
            state.currentTopic.id = topic.id;
            state.currentTopic.title = topic.title;
        },
        setPosts(state,posts) {
            state.currentTopic.posts = posts;
        }
    },
    actions: {
        login({ commit }, credentials) {
            return login_handler(credentials)
                .then(res => {
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
        },
        fetchAllTopics({commit}) {
            return fetch_all_topics()
                .then(res => {
                    if(res.success === true) {
                        const models = getAsTopicUIModels(res.topics);

                        commit('setTopics',models);
                        return Promise.resolve(SuccessfulTopicResponse());
                    }

                    else return Promise.reject(res);
                })
        },
        createTopic({commit},request) {
            return create_topic(request)
                .then(res => {
                    if(res.success === true) {
                        return Promise.resolve(SuccessfulTopicResponse());
                    }
                    else return Promise.reject(res);
                });
        },
        fetchPosts({commit},topicId) {
            return fetch_all_posts(topicId)
                .then(res => {
                    if(res.success === true) {
                        const models = getAsPostUIModels(res.posts);

                        commit('setPosts',models);
                        return Promise.resolve(SuccessfulPostResponse());
                    }
                    else return Promise.reject(res);
                });
        },
        navigateToTopic({commit},currentTopic) {
            commit('setCurrentTopic',currentTopic);
            return fetch_all_posts(currentTopic.id)
                .then(res => {
                    if(res.success === true) {
                        const models = getAsPostUIModels(res.posts);

                        commit('setPosts',models);
                        return Promise.resolve(SuccessfulPostResponse());
                    }
                    else return Promise.reject(res);
                });
        },
        createPost({commit,state},request) {
            return create_post(request)
                .then(res => {
                    if(res.success === true) return Promise.resolve(SuccessfulPostResponse());
                    else return Promise.reject(res);
                });
        }
    },
    plugins: [vuexLocal.plugin]
})
