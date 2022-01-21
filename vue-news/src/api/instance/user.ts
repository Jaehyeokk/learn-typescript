import { AxiosResponse } from 'axios';
import { user } from './index-instance.js';

export function fetchUser(id: string): Promise<AxiosResponse<any, any>> {
  return user.get(id);
}
