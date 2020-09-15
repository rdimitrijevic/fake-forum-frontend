<template>
<b-card>
  <b-form-textarea
      no-resize
      rows="5"
      placeholder="Enter new post text..."
      v-model="text"
  ></b-form-textarea>
  <b-row>
    <b-col
        cols="2"
        offset="10"
    >
      <b-button
          type="submit"
          variant="success"
          style="margin-top: 5px"
      >Comment</b-button>
    </b-col>
  </b-row>
</b-card>
</template>

<script>
export default {
  name: "NewPost",
  data() {
    return {
      text: ''
    }
  }
}
</script>

<style scoped>

</style>
