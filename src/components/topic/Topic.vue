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
  data() {
    return {
      id: null,
      topicName: 'RandomName',
      topicCreatedBy: 'RandomCreator',
      topicCreatedAt: '2020-09-15'
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
