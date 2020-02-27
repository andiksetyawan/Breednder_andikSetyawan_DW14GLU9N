import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import logger from "redux-logger";
import auth from "../_reducers/auth";
import species from "../_reducers/species";

const reducers = combineReducers({ auth, species });

const store = createStore(reducers, applyMiddleware(promise, logger));

export default store;
