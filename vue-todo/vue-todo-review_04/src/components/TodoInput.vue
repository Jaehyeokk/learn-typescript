<template>
  <div>
    <label for="todo-input"></label>
    <input
      id="todo-input"
      type="text"
      :value="todoText"
      @input="handleInput"
      @keyup.enter="onAddItem"
    />
    <button @click="onAddItem">추가</button>
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
    onAddItem() {
      this.$emit('add');
    },
  },
});
</script>

<style scoped></style>
