<template>
<b-card align="left" body-class="no-padding" >
  <b-card-body>{{ content }}</b-card-body>
  <b-card-footer>
    {{ creator }} at {{ created }}
  </b-card-footer>
</b-card>
</template>

<script>
export default {
  name: "Post",
  props: ['post'],
  data() {
    return {
      id: this.post.id,
      content: this.post.content,
      creator: this.post.creator,
      created: this.post.created
    }
  }
}
</script>

<style scoped>
.no-padding {
  padding: 2px 2px;
}
</style>
