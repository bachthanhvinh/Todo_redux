import { combineReducers } from "redux";
import todoReduces from "./todos";

const allReducers = combineReducers({
  todoReduces,
  // nhiều phần sử lý ở đây
});

export default allReducers;
