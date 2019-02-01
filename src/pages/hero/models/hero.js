import * as service from '../services/hero'
const namespace = 'hero';
const acType = {
  fetch_hero:'fetch',
  save_state:'save'
}
export default {
    namespace,
    acType,
    state: {
      filterKey:0,
      freeheros: [],
      itemHover:0 , //因为周免英雄列表里面有一个一直是详情图，所以这里给一个标记
        heros: []
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/hero') {
                    dispatch({
                        type: acType.fetch_hero
                    })
                }
            });
        }
    },
    effects: {
        *[acType.fetch_hero]({ payload }, { call, put }) {
          const herolist = yield call(service.queryHeroList);
          const freeheros = yield call(service.getFreeHeros,{number:13});
            yield put({
                type: 'save', payload: {
                        heros: herolist,
                        freeheros: freeheros
                    }
            });
        }
    },
    reducers: {
        [acType.save_state](state, action) {
            return { ...state, ...action.payload };
        },
    },
};
