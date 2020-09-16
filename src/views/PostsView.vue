<template>
<div id="posts-view">
  <navigation/>
  <div id="posts-container">
    <b-card align="left">
      <b-card-title><b>{{ getTopicTitle }}</b></b-card-title>
    </b-card>
    <post v-for="post in getPosts" :post="post"/>
    <new-post @post-added="$router.go(0)"/>
  </div>
</div>
</template>

<script>
import Post from "@/components/post/Post";
import NewPost from "@/components/post/NewPost";
import Navigation from "@/components/Navigation";
import {mapActions, mapGetters, mapState} from 'vuex';

export default {
  name: "PostsView",
  components: {
    Navigation,
    Post,
    NewPost
  },
  methods: {
    ...mapActions(['fetchPosts'])
  },
  computed: {
    ...mapGetters(['getPosts', 'getTopicTitle']),
    ...mapState(['currentTopic'])
  },
  created() {
    this.fetchPosts(this.currentTopic.id);
  }
}
</script>

<style scoped>
#posts-container {
  margin: 3.5% auto auto;
  width: 50%;
  border-left: darkgrey solid 1px;
  border-right: darkgrey solid 1px;
}
</style>
