<template>
  <div>
    <header>
      <h1>vue-ts-todo-reivew-03</h1>
    </header>
    <TodoInput
      :todoText="todoText"
      @input="UpdateTodoText"
      @add="onAddTodoItem"
    ></TodoInput>
    <ul>
      <TodoListItem
        v-for="(todoItem, index) in todoItems"
        :key="index"
        :todoItem="todoItem"
        :index="index"
        @toggle="onToggleItem"
        @remove="onRemoveItem"
      ></TodoListItem>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoInput from './components/TodoInput.vue';
import TodoListItem from './components/TodoListItem.vue';

export interface Todo {
  title: string;
  done: boolean;
}

const STORAGE_KEY = 'vue-ts-todo-review-03';
const storage = {
  fetch(): Todo[] {
    const fetched: string = localStorage.getItem(STORAGE_KEY) || '[]';
    return JSON.parse(fetched);
  },
  save(todoItems: Todo[]) {
    const stringified = JSON.stringify(todoItems);
    localStorage.setItem(STORAGE_KEY, stringified);
  },
};

export default Vue.extend({
  components: { TodoInput, TodoListItem },
  data() {
    return {
      todoText: '',
      todoItems: [] as Todo[],
    };
  },
  created() {
    this.fetchTodoItems();
  },
  methods: {
    fetchTodoItems() {
      this.todoItems = storage.fetch().sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    },
    UpdateTodoText(value: string) {
      this.todoText = value;
    },
    clearTodoText() {
      this.todoText = '';
    },
    onAddTodoItem() {
      const todoItem: Todo = {
        title: this.todoText,
        done: false,
      };
      if (!todoItem.title.trim()) return;
      this.todoItems.push(todoItem);
      storage.save(this.todoItems);
      this.clearTodoText();
    },
    onToggleItem(todoItem: Todo, index: number) {
      const item = {
        ...todoItem,
        done: !todoItem.done,
      };
      this.todoItems.splice(index, 1, item);
      storage.save(this.todoItems);
    },
    onRemoveItem(index: number) {
      this.todoItems.splice(index, 1);
      storage.save(this.todoItems);
    },
  },
});
</script>

<style scoped></style>
