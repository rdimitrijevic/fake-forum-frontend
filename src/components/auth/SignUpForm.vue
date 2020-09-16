<template>
<b-card id="sign-up-form">
  <b-form v-on:submit.prevent="handleRegister">
    <b-form-group
        label="Username:"
        label-for="username-signup-field"
        label-size="sm"
        label-align="left"
    >
      <b-input
          id="username-signup-field"
          size="sm"
          type="text"
          placeholder="Enter desired username..."
          v-model="username"
          required
      />
    </b-form-group>
    <b-form-group
        label="Email:"
        label-for="email-signup-field"
        label-size="sm"
        label-align="left"
    >
      <b-input
          id="email-signup-field"
          size="sm"
          type="email"
          placeholder="Enter your email..."
          v-model="email"
          required
      />
    </b-form-group>
    <b-form-group
        label="Password:"
        label-for="password-signup-field"
        label-size="sm"
        label-align="left"
    >
      <b-input
          id="password-signup-field"
          size="sm"
          type="password"
          placeholder="Enter desired password..."
          v-model="password"
          required
      />
    </b-form-group>
    <b-form-group
        label="Repeat password:"
        label-for="rpassword-signup-field"
        label-size="sm"
        label-align="left"
    >
      <b-input
          id="rpassword-signup-field"
          size="sm"
          type="password"
          placeholder="Repeat desired password..."
          v-model="repeatPassword"
          required
      />
    </b-form-group>
    <b-form-row
        style="margin-bottom: 10px"
    >
      <b-col>
        <b-form-group
            label="Gender"
            label-for="gender-select"
            label-size="sm"
            label-cols-sm="3"
            label-align="left"
        >
          <b-select
              id="gender-select"
              size="sm"
              :options="options"
              v-model="gender"
          >
          </b-select>
        </b-form-group>
      </b-col>
      <b-col>
        <b-button
            type="submit"
            variant="primary"
            class="btn-sm"
        >
          Sign Up
        </b-button>
      </b-col>
    </b-form-row>
  </b-form>
  <b-modal id="modal-2" :title="modalTitle" @ok="modalOk=true">
    <p class="my-4">{{ modalMessage }}</p>
  </b-modal>
</b-card>
</template>

<script>
import { mapActions } from 'vuex'
import {LoginRequest, RegisterRequest} from "@/models/requests/auth/AuthRequest";

export default {
  name: "SignUpForm",
  data() {
    return {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
      gender: '',


      options: [
        {value: 'male', text: 'Male'},
        {value: 'female', text: 'Female'}
      ],

      modalMessage: '',
      modalTitle: '',
      modalOk: false,
      requestOk: false
    }
  },
  methods: {
    ...mapActions(['login','register']),
    handleRegister(e) {
      if (this.password !== this.repeatPassword){
        this.modalMessage = 'Passwords must match'
        this.modalTitle = "FAILED"
        this.$bvModal.show('modal-2');

        return;
      }

      let credentials = RegisterRequest(
          this.username,this.password,
          this.email,this.gender);

      this.register(credentials)
          .then(res => {
            this.modalMessage = 'Register successful!'
            this.modalTitle = "SUCCESS"
            this.$bvModal.show('modal-2');

            this
                .login(LoginRequest(credentials.username,credentials.password))
                .then(res => {
                  this.requestOk = true;
                })
                .catch(err => {
                  this.modalMessage = err.reason;
                  this.modalTitle = "FAILED"
                  this.$bvModal.show('modal-2');
                });
          })
          .catch(err => {
            this.modalMessage = err.reason
            this.modalTitle = "FAILED"
            this.$bvModal.show('modal-2');
          });
    }
  },
  watch: {
    modalOk: function(val) {
      if(val && this.requestOk)
        this.$router.push('/home')
      else
        this.modalOk = false;
    }
  }
}
</script>

<style scoped>
#sign-up-form {
  margin: 5% auto auto;
  width: 40%;
}
</style>
