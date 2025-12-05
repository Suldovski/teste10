import axios from "axios";
import { Imc } from "../models/Imc";

const BASE_URL = "http://localhost:5169/api/imc";

export const listar = async (): Promise<Imc[]> => {
  const response = await axios.get(`${BASE_URL}/listar`);
  return response.data;
};

export const listarPorStatus = async (classificacao: string): Promise<Imc[]> => {
  const response = await axios.get(`${BASE_URL}/listarporstatus/${classificacao}`);
  return response.data;
};

export const cadastrar = async (imc: Imc): Promise<Imc> => {
  const response = await axios.post(`${BASE_URL}/cadastrar`, imc);
  return response.data;
};

export const alterar = async (id: number, imc: Imc): Promise<Imc> => {
  const response = await axios.put(`${BASE_URL}/alterar/${id}`, imc);
  return response.data;
};
