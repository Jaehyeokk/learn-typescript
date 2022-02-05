import axios, { AxiosPromise } from 'axios';

const api = {
  news: 'https://api.hnpwa.com/v0/news/1.json',
  ask: 'https://api.hnpwa.com/v0/ask/1.json',
  jobs: 'https://api.hnpwa.com/v0/jobs/1.json',
  user: 'https://api.hnpwa.com/v0/user/',
  item: 'https://api.hnpwa.com/v0/item/',
};

export interface FetchedListItem {
  comments_count: number;
  domain?: string;
  id: number;
  points: number;
  time: number;
  time_ago: string;
  title: string;
  type: string;
  url: string;
  user: string;
}

function fetchList(type: any) {
  const url = `https://api.hnpwa.com/v0/${type}/1.json`;
  return axios.get(url);
}

function fetchUser(id: any) {
  const url = `${api.user}${id}.json`;
  return axios.get(url);
}

function fetchItem(id: any) {
  const url = `${api.item}${id}.json`;
  return axios.get(url);
}

export { fetchUser, fetchItem, fetchList };
