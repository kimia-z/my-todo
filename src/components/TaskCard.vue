<template>
  <div class="card p-3 mb-3 shadow">
    <BaseCheckbox
      v-if="!isUpdate"
      class="form-check text-start"
      :modelValue="isCompleted"
      :checked="modelValue"
      v-model="editedIsCompleted"
      :label="label"
      :key="todoId"
      @update:modelValue="checkComplete"
    />
    <baseInput
      v-if="isUpdate"
      class="form-control"
      :modelValue="label"
      :value="modelValue"
      v-model="editedTodo"
      :key="todoId"
    />
    <button class="btn btn-outline-dark mt-3 shadow-sm" @click="onEdit">
      {{ message }}
    </button>
    <button
      class="btn btn-outline-danger mt-1 shadow-sm"
      @click="onDelete"
      :key="todoId"
    >
      Delete
    </button>
  </div>
</template>

<script>
import BaseCheckbox from "@/components/BaseCheckbox.vue";
import BaseInput from "./BaseInput.vue";
export default {
  components: {
    BaseCheckbox,
    BaseInput,
  },
  name: "TaskCard",
  props: {
    label: {
      type: String,
      default: "",
    },
    todoId: {
      type: Number,
      default: null,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
      message: "Edit",
      isUpdate: false,
      editedTodo: "",
      editedIsCompleted: false,
    };
  },
  methods: {
    onDelete() {
      this.$store.dispatch("deleteTodo", this.todoId);
    },
    onEdit() {
      this.isUpdate = !this.isUpdate;
      if (!this.isUpdate) {
        this.message = "Edit";
        !this.editedTodo ? (this.editedTodo = this.label) : this.editedTodo;
        this.$store.dispatch("editTodo", [this.editedTodo, this.todoId]);
      } else {
        this.message = "Update";
      }
    },
    checkComplete() {
      this.$store.dispatch("checkComplete", [
        this.todoId,
        this.editedIsCompleted,
      ]);
    },
  },
  computed: {},
};
</script>

<style scoped>
.btn {
  font-weight: bolder;
}
</style>
