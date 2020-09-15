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
  </b-card>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'

export default {
  name: "SignInForm",
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    loginHandler(e) {
      e.preventDefault();

      let credentials = {
        username: this.username,
        password: this.password
      }

      this.login(credentials)
          .then(res => console.log('success'))
          .catch(err => console.log('error'));
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
