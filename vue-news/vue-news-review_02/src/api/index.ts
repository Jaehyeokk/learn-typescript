import axios, { AxiosPromise } from 'axios';

const api = {
  news: 'https://api.hnpwa.com/v0/news/1.json',
  ask: 'https://api.hnpwa.com/v0/ask/1.json',
  jobs: 'https://api.hnpwa.com/v0/jobs/1.json',
  user: 'https://api.hnpwa.com/v0/user/',
  item: 'https://api.hnpwa.com/v0/item/',
};

export interface FetchedList {
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

export interface FetchedItem {
  comments?: FetchedItem[];
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

export interface FetchedUser {
  created: string;
  created_time: number;
  id: string;
  karma: number;
}

// export interface FetchedItem {}

function fetchNews(): AxiosPromise<FetchedList[]> {
  return axios.get(api.news);
}

// function fetchAsk(): AxiosPromise<FetchedList[]> {
//   return axios.get(api.ask);
// }

// function fetchJobs(): AxiosPromise<FetchedList[]> {
//   return axios.get(api.jobs);
// }

function fetchUser(id: string): AxiosPromise<FetchedUser> {
  const url = `${api.user}${id}.json`;
  return axios.get(url);
}

function fetchItem(id: string): AxiosPromise<FetchedItem> {
  const url = `${api.item}${id}.json`;
  return axios.get(url);
}

function fetchList(type: string): AxiosPromise<FetchedList[]> {
  const url = `https://api.hnpwa.com/v0/${type}/1.json`;
  return axios.get(url);
}

export { fetchNews, fetchUser, fetchItem, fetchList };
