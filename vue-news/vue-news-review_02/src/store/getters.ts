import { FetchedItem, FetchedList, FetchedUser } from '@/api';
import { RootState } from './state';

export const getters = {
  getNewsItem(state: RootState): FetchedList[] {
    return state.news;
  },
  getUser(state: RootState): FetchedUser {
    return state.user;
  },
  getItem(state: RootState): FetchedItem {
    return state.item;
  },
};

export type Getters = typeof getters;

// export default {
//   fetchedItem(state) {
//     return state.item;
//   },
//   fetchedUser(state) {
//     return state.user;
//   },
//   fetchedList(state) {
//     return state.list;
//   },
//   // ItemView
//   userName(state) {
//     return state.item.user;
//   },
//   userContent(state) {
//     return state.item.content;
//   },
//   userQuestion(state) {
//     return state.item.title;
//   },
//   userTimeAgo(state) {
//     return state.item.time_ago;
//   },
//   contentPoints(state) {
//     return state.item.points;
//   },
// };
