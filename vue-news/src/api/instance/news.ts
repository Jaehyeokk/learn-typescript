import { AxiosResponse } from 'axios';
import { news } from './index-instance';

export function fetchNews(id: string): Promise<AxiosResponse<any, any>> {
  return news.get(id);
}
