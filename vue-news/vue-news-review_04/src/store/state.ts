import { ListInfo } from "@/api";

export const state = {
  user: {},
  item: {},
  list: [] as ListInfo[],
};

export type RootState = typeof state;
