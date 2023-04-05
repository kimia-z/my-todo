<template>
  <nav class="navbar fixed-top navbar-light bg-light">
    <div class="container-fluid navbar-brand nav d-flex justify-content-end">
      <router-link :to="{ name: 'home' }" class="link"
        ><button class="btn btn-success" @click="Logout">
          Logout
        </button></router-link
      >
    </div>
  </nav>
  <div class="container mw-20">
    <TaskForm class="h3" />
    <h6 class="mb-3">
      {{ doneTodosLength }} out of {{ todosLength }} items completed
    </h6>
    <TaskCard
      v-for="todo in todos"
      :key="todo.id"
      :label="todo.label"
      :todoId="todo.id"
      :isCompleted="todo.is_completed"
    />
  </div>
</template>

<script>
import TaskCard from "/src/components/TaskCard.vue";
import TaskForm from "@/components/TaskForm.vue";

export default {
  name: "DashboardView",
  data() {
    return {};
  },
  components: {
    TaskCard,
    TaskForm,
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    todosLength() {
      return this.$store.state.todos.length;
    },
    doneTodosLength() {
      return this.$store.getters.doneTodos.length;
    },
  },
  methods: {
    Logout() {
      this.$store.dispatch("logout");
    },
  },
  created() {
    this.$store.dispatch("getTodos");
  },
};
</script>
<style scoped>
.container {
  margin-top: 100px;
}
.btn {
  font-weight: bolder;
}
</style>
