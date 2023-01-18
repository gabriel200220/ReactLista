import { api } from "./index";

class RecadosDataService {
  async getAll() {
    return await api.get("/recados");
  }

  async getOne(codigo: number) {
    return await api.get(`/recados/${codigo}`);
  }

  async create(pet: any) {
    return await api.post("/recados", {
      nome: pet.nome,
      observacao: pet.observacao,
    });
  }
}


const recService = new RecadosDataService();

export { recService };