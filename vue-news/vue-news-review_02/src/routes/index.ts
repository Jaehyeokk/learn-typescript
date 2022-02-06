import Vue from 'vue';
import VueRouter from 'vue-router';
import { ItemView, UserView } from '../views';
import createListView from '../views/CreateListView';
import bus from '../utils/bus';
import store from '../store/index';
import { actionTypes } from '@/store/actions';

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
      async beforeEnter(routeTo, routeFrom, next) {
        bus.$emit('on:progress');
        try {
          await store.dispatch(actionTypes.FETCH_LIST, routeTo.name);
          next();
        } catch (error) {
          new Error('failed to fetch news items');
        }
      },
    },
    {
      path: '/ask',
      name: 'ask',
      component: createListView('AskView'),
      async beforeEnter(routeTo, routeFrom, next) {
        bus.$emit('on:progress');
        try {
          await store.dispatch(actionTypes.FETCH_LIST, routeTo.name);
          next();
        } catch (error) {
          new Error('failed to fetch news items');
        }
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: createListView('JobsView'),
      async beforeEnter(routeTo, routeFrom, next) {
        bus.$emit('on:progress');
        try {
          await store.dispatch(actionTypes.FETCH_LIST, routeTo.name);
          next();
        } catch (error) {
          new Error('failed to fetch news items');
        }
      },
    },
    {
      path: '/item/:id',
      component: ItemView,
      async beforeEnter(routeTo, routeFrom, next) {
        bus.$emit('on:progress');
        const itemId = routeTo.params.id;
        try {
          await store.dispatch(actionTypes.FETCH_ITEM, itemId);
          next();
        } catch (error) {
          new Error('failed to fetch item details');
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
          await store.dispatch(actionTypes.FETCH_USER, itemId);
          next();
        } catch (error) {
          new Error('failed to fetch user profile');
        }
      },
    },
  ],
});
