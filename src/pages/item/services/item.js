import request from '@/utils/request';
import itemjson from '../../../../mock/json/item.json';
export async function queryItemList() {
  // return request('/api/item.json');

  return itemjson;
}
