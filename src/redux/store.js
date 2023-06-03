import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import authReducer from './features/auth'
import logger from "redux-logger";
import thunk from "redux-thunk";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };
  const reducer = combineReducers({
    auth: authReducer,
  });
  const persistedReducer = persistReducer(persistConfig, reducer);
  
  export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, logger],
  });
  