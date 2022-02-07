import { ActionContext } from 'vuex';
import { fetchUser, fetchItem, fetchList } from '../api/index';
import { Mutations } from './mutations';
import { RootState } from './state';

type MyACtionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RootState, RootState>, 'commit'>;

export const actions = {
  FETCH_USER({ commit }: MyACtionContext, userId: string): Promise<void> {
    return fetchUser(userId).then(res => commit('SET_USER', res.data));
  },
  FETCH_ITEM({ commit }: MyACtionContext, itemId: string): Promise<void> {
    return fetchItem(itemId).then(res => commit('SET_ITEM', res.data));
  },
  // hoc
  FETCH_LIST({ commit }: MyACtionContext, listType: string): Promise<void> {
    return fetchList(listType).then(res => commit('SET_LIST', res.data));
  },
};

export type Actions = typeof actions;
