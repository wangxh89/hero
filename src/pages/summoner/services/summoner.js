import request from '@/utils/request';

export async function querySummonerList() {
  return request('/api/summoner.json');
}
