<template>
<div id="topics-view">
  <navigation/>
  <div id="topics-container">
    <topic/>
    <topic/>
    <topic/>
    <topic/>
    <topic/>
    <topic/>
    <topic/>
    <topic/>
    <topic/>
    <topic/>
    <topic/>
    <topic/>
  </div>
</div>
</template>

<script>
import Topic from "@/components/topic/Topic";
import NewTopic from "@/components/topic/NewTopic";
import Navigation from "@/components/Navigation";

export default {
  name: "TopicsView",
  components: {
    Topic,
    NewTopic,
    Navigation
  }}
</script>

<style scoped>
#topics-container {
  margin: 3% auto auto;
  width: 50%;
}
</style>
