import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga'

import { fetchCollectionsStart } from './shop/shop.sagas.js'

import rootReducer from "./root-reducer.js";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionsStart)

const persistor = persistStore(store);

export { store, persistor };
