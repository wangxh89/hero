import request from '@/utils/request';
import herolistjson from '../../../../mock/json/herolist.json';
export async function queryHeroList() {
  // server
  // return request('/api/herolist.json');
  return herolistjson;
}
export async function getHeroDetails(params) {
  return request('/api/herodetails.json', {
    method: 'POST',
    body: params,
  });
}

export async function getFreeHeros(params) {
  //server
  // return request('/api/freeheros.json', {
  //   method: 'POST',
  //   body: params,
  // });

      function getRandomArrayElements(arr, count) {
        var shuffled = arr.slice(0),
          i = arr.length,
          min = i - count,
          temp,
          index;
        while (i-- > min) {
          index = Math.floor((i + 1) * Math.random());
          temp = shuffled[index];
          shuffled[index] = shuffled[i];
          shuffled[i] = temp;
        }
        return shuffled.slice(min);
      }
      return getRandomArrayElements(herolistjson, 13);
}
