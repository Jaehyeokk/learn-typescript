<template>
  <li>
    <span class="list-item" :class="toggleCompleteClass" @click="onToggle">{{
      todoItem.title
    }}</span>
    <button type="button" @click="onRemove">삭제</button>
  </li>
</template>

<script lang="ts">
import { Todo } from '@/App.vue';
import Vue, { PropType } from 'vue';

export default Vue.extend({
  props: {
    todoItem: {
      type: Object as PropType<Todo>,
    },
    index: {
      type: Number,
    },
  },
  computed: {
    toggleCompleteClass(): string | null {
      return this.todoItem.done ? 'complete' : null;
    },
  },
  methods: {
    onToggle() {
      this.$emit('toggle', this.todoItem, this.index);
    },
    onRemove() {
      this.$emit('remove', this.index);
    },
  },
});
</script>

<style scoped>
.list-item {
  cursor: pointer;
}

.complete {
  text-decoration: line-through;
}
</style>
