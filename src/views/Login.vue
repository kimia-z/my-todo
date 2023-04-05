<template>
  <div class="card mx-auto my-5 p-5">
    <h2 class="card-title">Log in</h2>
    <p class="card-text">Sign in if you already have an account.</p>
    <form @submit.prevent="onLogin">
      <BaseInput type="text" v-model="username" placeholder="username" />
      <BaseInput type="password" v-model="password" placeholder="password" />
      <p v-if="errorLogin" class="text-danger">
        username or password is invalid
      </p>
      <button type="submit" class="btn btn-dark my-4 shadow-sm">Sign in</button>
    </form>
    <p>
      Don't have an account?
      <a class="navbar-brand" href=""
        ><router-link :to="{ name: 'RegisterView' }"
          >sign up for free</router-link
        ></a
      >
    </p>
  </div>
</template>
<script>
import TodoService from "../services/TodoService";
import BaseInput from "../components/BaseInput.vue";

export default {
  name: "LoginView",
  components: {
    BaseInput,
  },
  data() {
    return {
      username: "",
      password: "",
      errorLogin: false,
    };
  },
  methods: {
    onLogin() {
      return TodoService.postLogin(this.username, this.password)
        .then((response) => {
          this.$router.push({ name: "Dashboard" });
          this.$store.dispatch("login", response);
        })
        .catch((err) => {
          if (err) {
            this.errorLogin = true;
          }
        });
    },
  },
};
</script>
<style scoped>
.card {
  width: 400px;
}
.btn {
  font-weight: bolder;
}
</style>
