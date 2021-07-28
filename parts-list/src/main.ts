/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './store/rootSagas';
import { RootState } from './store/RootState';
import { composeWithDevTools } from 'redux-devtools-extension';
import { partsListHomeReducer } from './store/partslisthome/reducers';

const appReducer = combineReducers<RootState>({
    PartsListHomeState: partsListHomeReducer
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action)
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
