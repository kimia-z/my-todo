<template>
  <div class="card mx-auto my-5 p-5">
    <h2 class="card-title mb-4">Register</h2>
    <form @submit.prevent="onSignup">
      <BaseInput type="text" v-model="username" placeholder="username" />
      <BaseInput type="password" v-model="password" placeholder="password" />
      <p v-if="errorRegister" class="text-danger">
        This username is already taken
      </p>
      <button type="submit" class="btn btn-dark mt-2 mb-4 shadow-sm">
        Sign up
      </button>
    </form>
    <p>
      Already have an account?
      <a class="navbar-brand" href=""
        ><router-link :to="{ name: 'LoginView' }">Login</router-link></a
      >
    </p>
  </div>
</template>
<script>
import BaseInput from "../components/BaseInput.vue";
import TodoService from "../services/TodoService";

export default {
  name: "RegisterView",
  components: {
    BaseInput,
  },
  data() {
    return {
      username: "",
      password: "",
      errorRegister: false,
    };
  },
  methods: {
    onSignup() {
      return TodoService.postRegister(this.username, this.password)
        .then(() => {
          this.$router.push({
            name: "LoginView",
          });
        })
        .catch((err) => {
          if (err) {
            this.errorRegister = true;
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
