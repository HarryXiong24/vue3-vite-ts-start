import service from '@/utils/request';

export const getList = (data: any = {}): any => {
  return service({
    url: '/api/list',
    method: 'get',
    data,
  });
};
