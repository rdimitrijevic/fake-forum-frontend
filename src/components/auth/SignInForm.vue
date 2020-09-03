<template>
  <b-card id="sign-in-form">
    <b-form>
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
export default {
  name: "SignInForm",
  data() {
    return {
      username: '',
      password: ''
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
