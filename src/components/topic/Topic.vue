<template>
  <b-card
      align="left"
      class="card"
  >
    <b-card-title>{{ topicName }}</b-card-title>
    <b-card-sub-title>{{ topicCreatedBy }} at {{ topicCreatedAt }}</b-card-sub-title>
    <a class="stretched-link" href="#"></a>
  </b-card></template>
<script>
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
