import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import logger from "redux-logger";
import auth from "../_reducers/auth";
import species from "../_reducers/species";
import pet from "../_reducers/pet";
import user from "../_reducers/user";
import match from "../_reducers/match";

const reducers = combineReducers({ auth, species, pet, user, match });

const store = createStore(reducers, applyMiddleware(promise, logger));

export default store;
