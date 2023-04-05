<template>
  <form @submit.prevent="onSubmit" class="mb-3">
    <BaseInput
      v-model="todo"
      class="label"
      label="What needs to be done? "
      type="text"
    />
    <button type="submit" class="btn btn-primary mt-3 mb-3 shadow-sm">
      Add
    </button>
  </form>
</template>
<script>
import BaseInput from "@/components/BaseInput.vue";
export default {
  name: "TaskForm",
  components: {
    BaseInput,
  },
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.todo) {
        this.$store.dispatch("createTodo", this.todo);
        this.todo = "";
      }
    },
  },
};
</script>
<style scoped>
.btn {
  font-weight: bolder;
}
</style>
