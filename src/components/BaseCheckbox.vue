<template>
  <form>
    <input
      class="form-check-input p-2 shadow-sm"
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label v-if="label" class="form-check-label ms-1 h6">{{ label }}</label>
  </form>
</template>
<script>
export default {
  name: "BaseCheckbox",
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
