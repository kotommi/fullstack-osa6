import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import anecdoteReducer from "./reducers/anecdoteReducer";
import notificationReducer from "./reducers/notificationReducer";
import filterReducer from "./reducers/filterReducer";

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer,
  notification: notificationReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
