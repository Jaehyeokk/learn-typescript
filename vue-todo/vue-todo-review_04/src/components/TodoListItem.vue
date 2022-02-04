<template>
  <li>
    <span class="item" :class="toggleClassComplete" @click="onToggle">{{
      todoItem.title
    }}</span>
    <button @click="onRemove">삭제</button>
  </li>
</template>

<script lang="ts">
import { Todo } from '@/App.vue';
import Vue, { PropType } from 'vue';

export default Vue.extend({
  props: {
    todoItem: Object as PropType<Todo>,
    index: Number,
  },
  computed: {
    toggleClassComplete(): string | null {
      return this.todoItem.done ? 'complete' : null;
    },
  },
  methods: {
    onRemove() {
      this.$emit('remove', this.index);
    },
    onToggle() {
      this.$emit('toggle', this.todoItem, this.index);
    },
  },
});
</script>

<style scoped>
.item {
  cursor: pointer;
}

.complete {
  text-decoration: line-through;
}
</style>
