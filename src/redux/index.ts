import {createStore, applyMiddleware} from 'redux';

import rootSaga from './sagas';
import rootReducer from './reducers';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

const createSagaMiddleware = require('redux-saga').default;
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
