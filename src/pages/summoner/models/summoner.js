import * as service from '../services/summoner'
export default {
    namespace: 'summoner',
    state: {
        summoners:[]
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/summoner') {
                    dispatch({
                        type: 'fetch'
                    })
                }
            });
        }
    },
    effects: {
        *fetch({ payload }, { call, put }) {
          const data = yield call(service.querySummonerList);
            yield put({
                type: 'save', payload: {
                        summoners: data
                    }
            });
        }
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
};
