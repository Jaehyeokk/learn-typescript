import { AxiosResponse } from 'axios';
import { ActionContext } from 'vuex';
import {
  fetchUser,
  fetchItem,
  fetchList,
  UserInfo,
  ItemInfo,
  ListInfo,
} from '../api/index';
import { Mutations } from './mutations';
import { RootState } from './state';

type MyActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RootState, RootState>, 'commit'>;

export const actions = {
  async FETCH_USER(
    { commit }: MyActionContext,
    userId: string
  ): Promise<AxiosResponse<UserInfo>> {
    const res = await fetchUser(userId);
    commit('SET_USER', res.data);
    return res;
  },
  async FETCH_ITEM(
    { commit }: MyActionContext,
    itemId: string
  ): Promise<AxiosResponse<ItemInfo>> {
    const res = await fetchItem(itemId);
    commit('SET_ITEM', res.data);
    return res;
  },
  async FETCH_LIST(
    { commit }: MyActionContext,
    listType: string
  ): Promise<AxiosResponse<ListInfo[]>> {
    const res = await fetchList(listType);
    commit('SET_LIST', res.data);
    return res;
  },
};

export type Actions = typeof actions;
