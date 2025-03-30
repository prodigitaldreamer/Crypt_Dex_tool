import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const saveTokens = async () => {
  return axios.post(`${API_BASE_URL}/tokens/save-tokens`);
};