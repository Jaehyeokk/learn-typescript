import axios, { AxiosResponse } from 'axios';

const api = {
  user: 'https://api.hnpwa.com/v0/user/',
  item: 'https://api.hnpwa.com/v0/item/',
  list: 'https://api.hnpwa.com/v0/',
};

export interface UserInfo {
  created: string;
  created_time: number;
  id: string;
  karma: number;
}

export interface ItemInfo {
  comments?: ItemInfo;
  comments_count: number;
  content: string;
  id: number;
  points: number;
  time: number;
  time_ago: string;
  title: string;
  type: string;
  url: string;
  user: string;
}

export interface ListInfo {
  comments_count: number;
  domain: string;
  id: number;
  points: number;
  time: number;
  time_ago: string;
  title: string;
  type: string;
  url: string;
  user: string;
}

function fetchUser(id: string): Promise<AxiosResponse<UserInfo>> {
  const url = `${api.user}${id}.json`;
  return axios.get(url);
}

function fetchItem(id: string): Promise<AxiosResponse<ItemInfo>> {
  const url = `${api.item}${id}.json`;
  return axios.get(url);
}

function fetchList(type: string): Promise<AxiosResponse<ListInfo[]>> {
  const url = `${api.list}${type}/1.json`;
  return axios.get(url);
}

export { fetchUser, fetchItem, fetchList };
