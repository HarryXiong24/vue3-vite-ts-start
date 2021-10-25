import { MockMethod } from 'vite-plugin-mock';
import { list } from './list';

export default [
  {
    url: '/api/list',
    method: 'get',
    response: () => {
      return list;
    },
  },
] as MockMethod[];
