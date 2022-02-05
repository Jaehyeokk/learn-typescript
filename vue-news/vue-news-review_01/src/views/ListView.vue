<template>
  <div>
    <ListItem :items="listItems"></ListItem>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ListItem from '../components/ListItem.vue';
import { FetchedListItem, fetchList } from '../api/index';

export default Vue.extend({
  components: {
    ListItem,
  },

  data() {
    return {
      listItems: [] as FetchedListItem[],
    };
  },

  methods: {
    async fetchListItems() {
      try {
        const name = this.$route.name;
        const { data } = await fetchList(name);
        this.listItems = data;
      } catch (error) {
        new Error('failed to fetch news items');
      }
    },
  },

  created() {
    this.fetchListItems();
  },
});
</script>

<style></style>
