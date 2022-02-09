import { ItemInfo, ListInfo, UserInfo } from '@/api';
import { RootState } from './state';

export const mutations = {
  SET_USER(state: RootState, user: UserInfo): void {
    state.user = user;
  },
  SET_ITEM(state: RootState, item: ItemInfo): void {
    state.item = item;
  },
  SET_LIST(state: RootState, list: ListInfo[]): void {
    state.list = list;
  },
};

export type Mutations = typeof mutations;
