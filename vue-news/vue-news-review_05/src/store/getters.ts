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
};

export type Getters = typeof getters;
