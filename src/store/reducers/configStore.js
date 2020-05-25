import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from "redux-thunk";

import rootReducer from './rootReducer'
 
const persistConfig = {
  key: 'cartReducer',
  storage,
  whitelist: [
          'cr',
          'auth'
  ]
}
 
const middlewares = [thunk];
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer,applyMiddleware(...middlewares))
const persistor = persistStore(store);

export {store, persistor}