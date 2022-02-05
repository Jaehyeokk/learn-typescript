import { fetchNews } from '@/api';
import { ActionContext } from 'vuex';
import { Mutations, MutationTypes } from './mutations';
import { RootState } from './state';

export enum ActionTypes {
  FETCH_NEWS = 'FETCH_NEWS',
}

type MyActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RootState, RootState>, 'commit'>;

export const actions = {
  async [ActionTypes.FETCH_NEWS](context: MyActionContext, payload?: any) {
    const { data } = await fetchNews();
    context.commit(MutationTypes.SET_NEWS, data);
    return data;
  },
};

export type Actions = typeof actions;
