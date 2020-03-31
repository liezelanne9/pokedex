import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { saga } from './saga';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(saga);

export default store;