<template>
  <div>
    <header>
      <h1>vue-ts-todo-review-05</h1>
    </header>
    <TodoInput
      :todoText="todoText"
      @input="updateTodoText"
      @add="addTodoItem"
    ></TodoInput>
    <ul>
      <TodoListItem
        v-for="(todoItem, index) in todoItems"
        :key="index"
        :todoItem="todoItem"
        :index="index"
        @toggle="toggleTodoItem"
        @remove="removeTodoItem"
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

const STORAGE_KEY = 'vue-ts-todo-review-05';
const storage = {
  fetch(): Todo[] {
    const fetched = localStorage.getItem(STORAGE_KEY) || '[]';
    const parsed = JSON.parse(fetched);
    return parsed;
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
    updateTodoText(value: string) {
      this.todoText = value;
    },
    clearTodoText() {
      this.todoText = '';
    },
    addTodoItem() {
      const title = this.todoText.trim();
      if (!title) return;
      const todoItem = {
        title: title,
        done: false,
      };
      this.todoItems.push(todoItem);
      storage.save(this.todoItems);
      this.clearTodoText();
    },
    removeTodoItem(index: number) {
      this.todoItems.splice(index, 1);
      storage.save(this.todoItems);
    },
    toggleTodoItem(todoItem: Todo, index: number) {
      const todo = {
        ...todoItem,
        done: !todoItem.done,
      };
      this.todoItems.splice(index, 1, todo);
      storage.save(this.todoItems);
    },
  },
});
</script>

<style scoped></style>
