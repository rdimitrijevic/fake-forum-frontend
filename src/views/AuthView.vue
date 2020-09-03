<template>
<div id="auth-view">
  <navigation/>
  <transition
      enter-class="fade-enter"
      enter-to-class="fade-enter-to"
      enter-active-class="fade-enter-active"
      leave-class="fade-leave"
      leave-to-class="fade-leave-to"
      leave-active-class="fade-leave-active"
      mode="out-in"
  >
    <sign-in-form v-if="!registerToggle"/>
    <sign-up-form v-else/>
  </transition>
  <b-btn-group>
    <b-button
        style="margin-top: 10px"
        type="submit"
        variant="outline-primary"
        @click="registerToggle = true"
    >
      Sign Up
    </b-button>
    <b-button
        style="margin-top: 10px"
        type="submit"
        variant="outline-primary"
        @click="registerToggle = false"
    >
      Sign In
    </b-button>
  </b-btn-group>
</div>
</template>

<script>
import Navigation from "@/components/Navigation";
import SignInForm from "@/components/auth/SignInForm";
import SignUpForm from "@/components/auth/SignUpForm";

export default {
  name: "AuthView",
  components: {
    Navigation,
    SignInForm,
    SignUpForm
  },
  data() {
    return {
      registerToggle: false
    }
  }
}
</script>

<style scoped>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave {
  opacity: 1;
}
</style>
