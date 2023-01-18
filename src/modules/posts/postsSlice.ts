import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postsInstance } from "../../services";

export const obterTodosPosts = createAsyncThunk("posts/getall", async () => {
  return await postsInstance.obtemTodos();
});


interface Post {
  id?: number;
  detalhamento: string;
  descrição: string;
}

const initialState: any[] = [];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(obterTodosPosts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// exporta o slice
export default postsSlice.reducer;