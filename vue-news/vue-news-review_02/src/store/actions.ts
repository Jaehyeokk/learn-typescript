import { AxiosResponse } from 'axios';
import { ActionContext } from 'vuex';
import {
  FetchedItem,
  FetchedList,
  FetchedUser,
  fetchItem,
  fetchList,
  fetchNews,
  fetchUser,
} from '../api/index';
import { Mutations, MutationTypes } from './mutations';
import { RootState } from './state';

export enum actionTypes {
  FETCH_NEWS = 'FETCH_NEWS',
  FETCH_LIST = 'FETCH_LIST',
  FETCH_ITEM = 'FETCH_ITEM',
  FETCH_USER = 'FETCH_USER',
}

type MyActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RootState, RootState>, 'commit'>;

export const actions = {
  async [actionTypes.FETCH_NEWS](
    context: MyActionContext
  ): Promise<AxiosResponse<FetchedList[]>> {
    const res = await fetchNews();
    context.commit(MutationTypes.SET_NEWS, res.data);
    return res;
  },

  async [actionTypes.FETCH_LIST](
    context: MyActionContext,
    type: string
  ): Promise<AxiosResponse<FetchedList[]>> {
    const res = await fetchList(type);
    context.commit(MutationTypes.SET_LIST, res.data);
    return res;
  },

  async [actionTypes.FETCH_ITEM](
    context: MyActionContext,
    id: string
  ): Promise<AxiosResponse<FetchedItem>> {
    const res = await fetchItem(id);
    context.commit(MutationTypes.SET_ITEM, res.data);
    return res;
  },
  async [actionTypes.FETCH_USER](
    context: MyActionContext,
    id: string
  ): Promise<AxiosResponse<FetchedUser>> {
    const res = await fetchUser(id);
    context.commit(MutationTypes.SET_USER, res.data);
    return res;
  },
};

export type Actions = typeof actions;

// import {
//   fetchNews,
//   fetchAsk,
//   fetchJobs,
//   fetchUser,
//   fetchItem,
//   fetchList,
// } from '../api/index';

// export default {
//   FETCH_NEWS({ commit }) {
//     return fetchNews().then(response => commit('SET_NEWS', response.data));
//   },
//   FETCH_ASK({ commit }) {
//     return fetchAsk().then(response => commit('SET_ASK', response.data));
//   },
//   FETCH_JOBS({ commit }) {
//     return fetchJobs().then(response => commit('SET_JOBS', response.data));
//   },
//   FETCH_USER({ commit }, userId) {
//     return fetchUser(userId).then(res => commit('SET_USER', res.data));
//   },
//   FETCH_ITEM({ commit }, itemId) {
//     return fetchItem(itemId).then(res => commit('SET_ITEM', res.data));
//   },
//   // hoc
//   FETCH_LIST({ commit }, listType) {
//     return fetchList(listType).then(res => commit('SET_LIST', res.data));
//   },
// };
