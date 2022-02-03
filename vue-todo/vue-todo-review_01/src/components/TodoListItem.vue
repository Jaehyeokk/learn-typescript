<template>
  <li>
    <span class="item" :class="completeItemClass" @click="toggleItem">
      {{ todoItem.title }}
    </span>
    <button type="button" @click.prevent="removeItem">삭제</button>
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
    completeItemClass(): string | null {
      return this.todoItem.done ? 'complete' : null;
    },
  },
  methods: {
    removeItem() {
      this.$emit('remove', this.index);
    },
    toggleItem() {
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
