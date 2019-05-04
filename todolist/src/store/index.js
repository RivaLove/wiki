import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga';
import TodoSagas from './sagas'
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
)
const store = createStore(
  reducer,
  enhancer
);// 第二个参数：中间件
sagaMiddleware.run(TodoSagas)
export default store;