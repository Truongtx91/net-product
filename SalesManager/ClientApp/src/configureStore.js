import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import createReducer from './reducers';
import LoginSaga from './containers/LoginPage/sagas';
import SignupSaga from './containers/SignupPage/sagas';

function* IndexSaga(){
  yield [
    SignupSaga(),
    LoginSaga(),
  ]
}

export default function configureStore (initialState = {}, history) {
  
  let composeEnhancers = compose;
  const reduxSagaMonitorOptions = {};

  const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createReducer,
    composeSetup(applyMiddleware(sagaMiddleware)), // allows redux devtools to watch sagas
  );

  sagaMiddleware.run(IndexSaga);//
  // Extensions
  //store.runSaga = sagaMiddleware.run;

  return store;
}
