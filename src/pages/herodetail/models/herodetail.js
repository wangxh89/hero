import * as service from '../services/herodetail'
export default {
    namespace: 'herodetail',
    state: {
        text: 'page work',
        list: []
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/herodetail') {
                    dispatch({
                        type: 'fetch'
                    })
                }
            });
        }
    },
    effects: {
        *fetch({ payload }, { call, put }) {
            yield put({
                type: 'save', payload: {
                        text: 'page init'
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
