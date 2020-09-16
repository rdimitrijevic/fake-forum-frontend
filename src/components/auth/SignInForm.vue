<template>
  <b-card id="sign-in-form">
    <b-form @submit="loginHandler">
      <b-form-group
          label="Username:"
          label-for="username-field"
      >
        <b-input
            id="username-field"
            type="text"
            placeholder="Enter your username..."
            v-model="username"
            required
        />
      </b-form-group>
      <b-form-group
          label="Password:"
          label-for="password-field"
      >
        <b-input
            id="password-field"
            type="password"
            placeholder="Enter your password..."
            v-model="password"
            required
        />
      </b-form-group>

      <b-button
          type="submit"
          variant="primary"
          class="btn-sm"
      >Sign In</b-button>
    </b-form>
    <b-modal id="modal-1" :title="modalTitle" @ok="modalOk=true">
      <p class="my-4">{{ modalMessage }}</p>
    </b-modal>
  </b-card>
</template>

<script>
import { mapActions } from 'vuex'
import { LoginRequest } from "@/models/requests/auth/AuthRequest";

export default {
  name: "SignInForm",
  data() {
    return {
      username: '',
      password: '',
      modalMessage: '',
      modalTitle: '',
      modalOk: false,
      requestOk: false
    }
  },
  methods: {
    ...mapActions(['login']),
    loginHandler(e) {
      e.preventDefault();

      let credentials = LoginRequest(this.username,this.password);

      this.login(credentials)
          .then(res => {
            this.requestOk = true;
            this.modalMessage = 'Login successful!'
            this.modalTitle = "SUCCESS"
            this.$bvModal.show('modal-1');
          })
          .catch(err => {
            this.modalMessage = err.reason
            this.modalTitle = "FAILED"
            this.$bvModal.show('modal-1');
          });
    }
  },
  watch: {
    modalOk: function(val) {
      if(val && this.requestOk)
        this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
#sign-in-form {
  margin: 5% auto auto;
  width: 40%;
}
</style>
