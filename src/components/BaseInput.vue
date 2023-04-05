<template>
  <label v-if="label" class="mb-3">{{ label }}</label>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="form-control shadow-sm mb-2"
    :placeholder="placeholder"
    :type="type"
    required
  />
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
  },
};
</script>
