import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import logger from "redux-logger"
import { auth } from "../_reducers/auth";

const reducers = combineReducers({ auth });

const store = createStore(reducers, applyMiddleware(promise,logger));

export default store;
