import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postsInstance } from "../../services";

interface Descrição {
  id?: number;
  detalhamento: string;
  descricao: string;
}

export const adicionarPost = createAsyncThunk<Descrição, Descrição>("post/add", async (objeto) => {
  return await postsInstance.criar(objeto);
});

export const obterPostPorId = createAsyncThunk<Descrição, number>("post/getone", async (id) => {
  return await postsInstance.obtemUmPost(id);
});

const postSlice = createSlice({
  name: "descricao",
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder.addCase(adicionarPost.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(obterPostPorId.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default postSlice.reducer;