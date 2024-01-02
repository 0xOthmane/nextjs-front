import { TRegisterSchema } from "@/types/auth";
import { axios } from "./axios";

export const api = {
  register: async (data: TRegisterSchema) => {
    return axios.post("", { data });
  },
  verifyEmail: async () => {
    return axios.post('')
  },
  getProducts: async () => {
    return axios.get('')
  }
};
