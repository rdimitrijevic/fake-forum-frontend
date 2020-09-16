<template>
<div>
  <b-navbar type="dark" variant="dark" fixed="top">
    <b-navbar-brand><b><em>FakeForum</em></b></b-navbar-brand>
    <b-navbar-nav v-show="isUserLoggedIn">
      <b-nav-item to="/home">Topics</b-nav-item>
    </b-navbar-nav>

    <b-navbar-nav v-show="isUserLoggedIn">
      <b-nav-item-dropdown>
        <template v-slot:button-content>
          <b>{{ getUsername }}</b>
        </template>
        <b-dropdown-item @click="handleLogout">Sign Out</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  name: "Navigation",
  computed: {
    ...mapGetters(['isUserLoggedIn','getUsername'])
  },
  methods: {
    ...mapActions(['logOut']),
    handleLogout() {
      this.logOut();
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
</style>
