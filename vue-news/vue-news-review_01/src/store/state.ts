import { FetchedListItem } from '@/api';

export const state = {
  news: [] as FetchedListItem[],
  // ask: [],
  // jobs: [],
  // user: {},
  // item: {},
  // list: [],
};

export type RootState = typeof state;
