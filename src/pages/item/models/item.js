import * as service from '../services/item'
import { Server } from 'https';
export default {
    namespace: 'item',
    state: {
        items: [],
        filterKey:0
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/item') {
                    dispatch({
                        type: 'fetch'
                    })
                }
            });
        }
    },
    effects: {
        *fetch({ payload }, { call, put }) {
            const data = yield call(service.queryItemList);
            yield put({
                type: 'save', payload: {
                        items: data
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
