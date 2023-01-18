import { combineReducers } from "@reduxjs/toolkit";
import recSlice from "./recados/recSlice";
import posts from "./posts/postsSlice";
import post from "./posts/postSlice";

// Combina todos os reducers da aplicação
export default combineReducers({
  recSlice,
  posts,
  post,
});