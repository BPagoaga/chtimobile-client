import axios from "axios";
import store from "@/store/store";

export default () => {
  const token = store.state.token;
  const headers = {};
  if (token) {
    headers.Authorization = `Bearer ${store.state.token}`;
  }

  return axios.create({
    baseURL: "http://localhost:8000",
    headers
  });
};
