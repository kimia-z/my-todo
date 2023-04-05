<template>
  <nav class="navbar fixed-top navbar-light bg-light">
    <div class="container-fluid navbar-brand nav d-flex justify-content-end">
      <router-link :to="{ name: 'LoginView' }" class="link px-3"
        >Login</router-link
      >
      <router-link :to="{ name: 'RegisterView' }" class="link"
        >Register</router-link
      >
    </div>
  </nav>
  <div class="container mw-20">
    <h1 class="mb-3">Hello</h1>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {};
  },
};
</script>
<style scoped>
.container {
  margin-top: 100px;
}
.link {
  color: #42b983;
  text-decoration: none;
}
</style>
