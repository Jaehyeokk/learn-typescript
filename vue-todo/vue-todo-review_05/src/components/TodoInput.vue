<template>
  <div>
    <input
      type="text"
      :value="todoText"
      @input="handleInput"
      @keyup.enter="onAdd"
    />
    <button @click="onAdd">추가</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    todoText: String,
  },
  methods: {
    handleInput(event: Event) {
      const eventTarget = event.target as HTMLInputElement;
      this.$emit('input', eventTarget.value);
    },
    onAdd() {
      this.$emit('add');
    },
  },
});
</script>

<style scoped></style>
