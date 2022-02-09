import { RootState } from "./state";

export const getters = {
  fetchedItem(state: RootState): any {
    return state.item;
  },
  fetchedUser(state: RootState): any {
    return state.user;
  },
  fetchedList(state: RootState): any {
    return state.list;
  },
};

export type Getters = typeof getters;
