<template>
<b-card>
  <b-form @submit.prevent="handleCreate" inline>
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
  <b-modal id="modal-3" :title="modalTitle" @ok="modalOk=true">
    <p class="my-4">{{ modalMessage }}</p>
  </b-modal>
</b-card>
</template>

<script>
import {mapActions} from 'vuex'
import {NewTopicRequest} from "@/models/requests/topic/NewTopicRequest";

export default {
  name: "NewTopic",
  data() {
    return {
      topicName: '',
      modalTitle: '',
      modalMessage: '',
      modalOk: false,
      requestOk: false
    }
  },
  methods: {
    ...mapActions(['createTopic']),
    handleCreate() {
      const newTopic = NewTopicRequest(this.topicName);
      console.log(newTopic)
      this.createTopic(newTopic)
          .then(res => {
            this.requestOk = true;
            this.modalMessage = 'Successfully created topic'
            this.modalTitle = "SUCCESS"
            this.$bvModal.show('modal-3');
          })
          .catch(err => {
            this.modalMessage = err.reason
            this.modalTitle = "FAILED"
            this.$bvModal.show('modal-3');
          });
    }
  },
  watch: {
    modalOk: function(val) {
      if(val && this.requestOk)
        this.$emit('topic-added');
    }
  }
}
</script>

<style scoped>

</style>
