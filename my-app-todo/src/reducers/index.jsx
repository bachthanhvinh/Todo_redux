import { combineReducers } from "redux";
import todoReduce from "./todos";

const allReducers = combineReducers({
  todoReduce,
  // nhiều phần sử lý ở đây
});

export default allReducers;
