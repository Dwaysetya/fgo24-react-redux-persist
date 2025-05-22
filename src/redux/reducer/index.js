import { combineReducers } from "@reduxjs/toolkit";
import todos from "./todos";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "todos",
  storage,
};

const reducer = combineReducers({
  todos: persistReducer(persistConfig, todos),
});

export default reducer;
