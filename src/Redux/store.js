import { createStore, applyMiddleware, combineReducers } from "redux";

import promiseMiddleWare from "redux-promise-middleware";
import user_reducer from "./ducks/user_reducer";


const middleware = applyMiddleware(promiseMiddleWare);

const combinedReducers = combineReducers({
user_reducer
});

const store = createStore(combinedReducers, middleware);

export default store;
