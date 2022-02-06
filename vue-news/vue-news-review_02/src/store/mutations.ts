import { FetchedItem, FetchedList, FetchedUser } from '@/api';
import { RootState } from './state';

export enum MutationTypes {
  SET_NEWS = 'SET_NEWS',
  SET_LIST = 'SET_LIST',
  SET_ITEM = 'SET_ITEM',
  SET_USER = 'SET_USER',
}

export const mutations = {
  [MutationTypes.SET_NEWS](state: RootState, news: any) {
    state.news = news;
  },
  [MutationTypes.SET_LIST](state: RootState, list: FetchedList[]) {
    state.list = list;
  },
  [MutationTypes.SET_ITEM](state: RootState, item: FetchedItem) {
    state.item = item;
  },
  [MutationTypes.SET_USER](state: RootState, user: FetchedUser) {
    state.user = user;
  },
};

export type Mutations = typeof mutations;

// export default {
//   SET_NEWS(state, news) {
//     state.news = news;
//   },
//   SET_ASK(state, ask) {
//     state.ask = ask;
//   },
//   SET_JOBS(state, jobs) {
//     state.jobs = jobs;
//   },
//   SET_USER(state, user) {
//     state.user = user;
//   },
//   SET_ITEM(state, item) {
//     state.item = item;
//   },
//   SET_LIST(state, list) {
//     state.list = list;
//   },
// };
