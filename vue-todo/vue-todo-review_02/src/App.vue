<template>
  <div>
    <header>
      <h1>vue-ts-todo review_02</h1>
    </header>
    <Todoinput
      :todoText="todoText"
      @input="updateInput"
      @add="addTodoItem"
    ></Todoinput>
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
import Todoinput from './components/Todoinput.vue';
import TodoListItem from './components/TodoListItem.vue';

const STORAGE_KEY = 'vue-ts-todo-review-02';
const storage = {
  fetch(): Todo[] {
    const fetched: string = localStorage.getItem(STORAGE_KEY) || '[]';
    const parsed = JSON.parse(fetched);
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
  components: { Todoinput, TodoListItem },
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
    updateInput(value: string) {
      this.todoText = value;
    },
    addTodoItem() {
      const value = {
        title: this.todoText.trim(),
        done: false,
      };
      if (!value.title) return;
      this.todoItems.push(value);
      storage.save(this.todoItems);
      this.clearInput();
    },
    clearInput() {
      this.todoText = '';
    },
    onToggleItem(todoItem: Todo, index: number) {
      const value = {
        ...todoItem,
        done: !todoItem.done,
      };
      this.todoItems.splice(index, 1, value);
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
