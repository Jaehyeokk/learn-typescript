import { ItemInfo, ListInfo, UserInfo } from '@/api';
import { RootState } from './state';

export const getters = {
  fetchedItem(state: RootState): ItemInfo {
    return state.item;
  },
  fetchedUser(state: RootState): UserInfo {
    return state.user;
  },
  fetchedList(state: RootState): ListInfo[] {
    return state.list;
  },
  // ItemView
  userName(state: RootState): string {
    return state.item.user;
  },
  userContent(state: RootState): string {
    return state.item.content;
  },
  userQuestion(state: RootState): string {
    return state.item.title;
  },
  userTimeAgo(state: RootState): string {
    return state.item.time_ago;
  },
  contentPoints(state: RootState): number {
    return state.item.points;
  },
};

export type Getters = typeof getters;
