<template>
  <div>
    <header>
      <h1>Todo-typescript-v1</h1>
    </header>
    <TodoInput
      :item="todoText"
      @input="UpdateTodoText"
      @add="addTodoItem"
    ></TodoInput>
    <ul>
      <TodoListItem
        v-for="(todoItem, index) in todoItems"
        :key="index"
        :todoItem="todoItem"
        :index="index"
        @remove="removeTodoItem"
        @toggle="toggleItem"
      ></TodoListItem>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoInput from './components/TodoInput.vue';
import TodoListItem from './components/TodoListItem.vue';

const STORAGE_KEY = 'vue-todo-typesript-v1';
const storage = {
  fetch(): Todo[] {
    const todoItems: string = localStorage.getItem(STORAGE_KEY) || '[]';
    const parsed = JSON.parse(todoItems);
    return parsed;
  },
  save(todoItems: Todo[]) {
    const stringified = JSON.stringify(todoItems);
    localStorage.setItem(STORAGE_KEY, stringified);
  },
};

export interface Todo {
  title: string;
  done: boolean;
}

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
    UpdateTodoText(value: string) {
      this.todoText = value;
    },
    addTodoItem() {
      const value = {
        title: this.todoText,
        done: false,
      };
      this.todoItems.push(value);
      storage.save(this.todoItems);
      this.clearInput();
    },
    clearInput() {
      this.todoText = '';
    },
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
    removeTodoItem(index: number) {
      this.todoItems.splice(index, 1);
      storage.save(this.todoItems);
    },

    toggleItem(todoItem: Todo, index: number) {
      const todo: Todo = {
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
