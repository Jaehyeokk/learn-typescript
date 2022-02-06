import { FetchedItem, FetchedList, FetchedUser } from '@/api';

export const state = {
  news: [],
  ask: [],
  jobs: [],
  user: {} as FetchedUser,
  item: {} as FetchedItem,
  list: [] as FetchedList[],
};

export type RootState = typeof state;
