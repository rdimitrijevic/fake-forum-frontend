<template>
  <b-card
      align="left"
      class="card"
  >
    <b-card-title>{{ topicName }}</b-card-title>
    <b-card-sub-title>{{ topicCreatedBy }} at {{ topicCreatedAt }}</b-card-sub-title>
    <a class="stretched-link" @click="handleNavigation" href="#"></a>
  </b-card></template>
<script>
import {mapActions} from 'vuex';

export default {
  name: "Topic",
  props: ['topic'],
  data() {
    return {
      id: this.topic.id,
      topicName: this.topic.title,
      topicCreatedBy: this.topic.creator,
      topicCreatedAt: this.topic.created
    }
  },
  methods: {
    ...mapActions(['navigateToTopic']),
    handleNavigation() {
      console.log(this.id)
      const toTopic = {
        id: this.id,
        title: this.topicName
      }

      console.log(toTopic);
      this.navigateToTopic(toTopic)
          .then((_) => {
            this.$router.push(`/topic/${toTopic.id}`)
          })
          .catch(err => {
            console.log(err);
          });
    }
  }

}
</script>

<style scoped>
.card:hover {
  text-underline-style: dash-long;
  color: #777;
}
.card {
  margin-top: 2px;
  margin-bottom: 2px;
}
</style>
