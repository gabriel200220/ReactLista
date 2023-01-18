import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { recService } from "../../services/index";

export const getAllRecados = createAsyncThunk("recs/getall", async () => {
  const resposta = await recService.getAll();

  if (!resposta.data.sucesso) {
    return [];
  }

  return resposta.data.data;
});

// Para facilitar a utilização criei uma Interface
interface Rec {
  detalhamento: string;
  descrição: string;
 
}

// Crio o Thunk com o tipo do retorno e o tipo da Entrada <Pet, Pet>, ou seja,
// entra um Pet sem codigo, sai um pet Cadastrado
export const addRec = createAsyncThunk<Rec, Rec>("rec/add", async (rec) => {
  // envio a requisição para a classe de serviço q
  // via axios envia para o backend e Zaz
  const resposta = await recService.create(rec);

  return resposta.data.data;
});

const initialState: any[] = [];

const recSlice = createSlice({
  name: "recs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllRecados.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addRec.fulfilled, (state, action) => {
        return [...state, action.payload];
      });
  },
});

// exporta o slice
export default recSlice.reducer;