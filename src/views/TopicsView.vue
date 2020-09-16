<template>
<div id="topics-view">
  <navigation/>
  <div id="topics-container">
    <b-card>
      <b-row
          style="padding-top: 20px; padding-bottom: 20px;"
      >
        <b-col>
          <h3>Available topics</h3>
        </b-col>
        <b-col/>
        <b-col>
          <b-button
              v-b-toggle.collapse-topic-create
              variant="primary"
          >
            CreateNew <b>+</b>
          </b-button>
        </b-col>
      </b-row>
    </b-card>
    <b-collapse id="collapse-topic-create" class="mt-2">
      <new-topic @topic-added="$router.go(0)"/>
    </b-collapse>
    <topic v-for="topic in getAllTopics" :topic="topic"></topic>
  </div>
</div>
</template>

<script>
import Topic from "@/components/topic/Topic";
import NewTopic from "@/components/topic/NewTopic";
import Navigation from "@/components/Navigation";

import {mapGetters,mapActions} from 'vuex'

export default {
  name: "TopicsView",
  components: {
    Topic,
    NewTopic,
    Navigation
  },
  methods: {
    ...mapActions(['fetchAllTopics'])
  },
  computed: {
    ...mapGetters(['getAllTopics'])
  },
  created() {
    this.fetchAllTopics();
  }
}
</script>

<style scoped>
#topics-container {
  margin: 3.5% auto auto;
  width: 50%;
  /*border-left: darkgrey solid 1px;*/
  /*border-right: darkgrey solid 1px;*/
}
</style>
