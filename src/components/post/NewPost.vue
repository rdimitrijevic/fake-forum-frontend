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
          @click.prevent="handleCreate"
      >Comment</b-button>
    </b-col>
  </b-row>
  <b-modal id="modal-4" :title="modalTitle" @ok="modalOk=true">
    <p class="my-4">{{ modalMessage }}</p>
  </b-modal>
</b-card>
</template>

<script>
import {mapActions,mapState} from "vuex";
import {PostRequest} from "@/models/requests/post/PostRequest";

export default {
  name: "NewPost",
  data() {
    return {
      text: '',
      modalTitle: '',
      modalMessage: '',
      modalOk: false,
      requestOk: false
    }
  },
  methods: {
    ...mapActions(['createPost']),
    handleCreate() {
      const newPost = PostRequest(this.text,this.currentTopic.id);
      console.log(this.currentTopic.id)
      console.log(newPost)
      this.createPost(newPost)
          .then(res => {
            this.requestOk = true;
            this.modalMessage = 'Successfully created post'
            this.modalTitle = "SUCCESS"
            this.$bvModal.show('modal-4');
          })
          .catch(err => {
            this.modalMessage = err.reason
            this.modalTitle = "FAILED"
            this.$bvModal.show('modal-4');
          });
    }
  },
  computed:{
    ...mapState(['currentTopic'])
  },
  watch: {
    modalOk: function(val) {
      if(val && this.requestOk)
        this.$emit('post-added');
    }
  }
}
</script>

<style scoped>

</style>
