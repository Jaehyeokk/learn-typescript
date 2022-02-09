import { ItemInfo, ListInfo, UserInfo } from '@/api';

export const state = {
  user: {} as UserInfo,
  item: {} as ItemInfo,
  list: [] as ListInfo[],
};

export type RootState = typeof state;
