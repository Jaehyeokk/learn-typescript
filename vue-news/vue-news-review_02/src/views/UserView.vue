<template>
  <div class="container">
    <h2>User Profile</h2>
    <user-profile :userInfo="getUser">
      <div slot="userName">{{ getUser.id }}</div>
      <span slot="userKarma">{{ getUser.karma }} karma</span>
    </user-profile>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';
import bus from '../utils/bus';

export default Vue.extend({
  components: {
    UserProfile,
  },

  computed: {
    ...mapGetters(['getUser']),
  },

  created() {
    bus.$emit('off:progress');
  },
});
</script>

<style scoped>
.container {
  padding: 0 0.5rem;
}
</style>
