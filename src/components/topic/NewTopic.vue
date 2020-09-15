<template>
<b-card>
  <b-form inline>
    <b-col>
      <label>
        New Topic:
      </label>
    </b-col>
    <b-col
        cols="8"
    >
      <b-input
          id="new-topic-input"
          size="sm"
          type="text"
          placeholder="Enter new topic name..."
          v-model="topicName"
          style="width: 100%"
      />
    </b-col>
    <b-col
        cols="2"
    >
      <b-button
          class="btn-sm"
          type="submit"
          variant="success"
          style="width: 100%"
      >
        Create
      </b-button>
    </b-col>
  </b-form>
</b-card>
</template>

<script>
export default {
  name: "NewTopic",
  data() {
    return {
      topicName: ''
    }
  }
}
</script>

<style scoped>

</style>
