<template>
<div id="posts-view">
  <navigation/>
  <div id="posts-container">
    <b-card align="left">
      <b-card-title><b>{{ $route.params.id }}</b></b-card-title>
    </b-card>
    <post v-for="i in 7" :key="i"/>
    <new-post/>
  </div>
</div>
</template>

<script>
import Post from "@/components/post/Post";
import NewPost from "@/components/post/NewPost";
import Navigation from "@/components/Navigation";

export default {
  name: "PostsView",
  components: {
    Navigation,
    Post,
    NewPost
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
