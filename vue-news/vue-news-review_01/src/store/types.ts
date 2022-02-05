import { CommitOptions, DispatchOptions, Store } from 'vuex';
import { RootState } from './state';
import { Getters } from './getters';
import { Mutations } from './mutations';
import { Actions } from './actions';

type MyMutations = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};

type MyActions = {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};

type MyGetters = {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

export type MyStore = Omit<
  Store<RootState>,
  'getters' | 'commit' | 'dispatch'
> &
  MyGetters &
  MyMutations &
  MyActions;
