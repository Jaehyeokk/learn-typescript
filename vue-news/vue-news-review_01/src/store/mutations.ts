import { FetchedListItem } from '@/api';
import { RootState } from './state';

export enum MutationTypes {
  SET_NEWS = 'SET_NEWS',
}

export const mutations = {
  [MutationTypes.SET_NEWS](state: RootState, news: FetchedListItem[]) {
    state.news = news;
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
// }
