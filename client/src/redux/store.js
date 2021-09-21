import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewareList = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewareList.push(createLogger());
}
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewareList)),
);
sagaMiddleware.run(rootSaga);

export default store;
