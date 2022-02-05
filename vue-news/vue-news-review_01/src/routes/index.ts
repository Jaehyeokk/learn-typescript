import Vue from 'vue';
import VueRouter from 'vue-router';
import { ItemView, UserView } from '../views';
import createListView from '../views/CreateListView';
import bus from '../utils/bus';
import store from '../store/index';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      component: createListView('NewsView'),
      beforeEnter(routeTo, routeFrom, next) {
        bus.$emit('on:progress');
        next();
      },
    },
    {
      path: '/ask',
      name: 'ask',
      component: createListView('AskView'),
      beforeEnter(routeTo, routeFrom, next) {
        bus.$emit('on:progress');
        next();
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: createListView('JobsView'),
      async beforeEnter(routeTo, routeFrom, next) {
        bus.$emit('on:progress');
        next();
      },
    },
    {
      path: '/item/:id',
      component: ItemView,
      async beforeEnter(routeTo, routeFrom, next) {
        bus.$emit('on:progress');
        const itemId = routeTo.params.id;
        try {
          await store.dispatch('FETCH_ITEM', itemId);
          next();
        } catch (error) {
          new Error('failed to fetch item details');
          // next('./error');
        }
      },
    },
    {
      path: '/user/:id',
      component: UserView,
      async beforeEnter(routeTo, routeFrom, next) {
        bus.$emit('on:progress');
        const itemId = routeTo.params.id;
        try {
          await store.dispatch('FETCH_USER', itemId);
          next();
        } catch (error) {
          new Error('failed to fetch user profile');
        }
      },
    },
  ],
});
