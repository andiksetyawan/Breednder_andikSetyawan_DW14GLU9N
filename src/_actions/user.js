import { API } from "../config/api";
import { GET_USER } from "../config/constants";

export const getUsers = () => {
  console.log("masuk get specie actions");
  return {
    type: GET_USER,
    payload: async () => {
      const res = await API.get("/users");
      console.log("ressss Users", res.data.data);
      return res.data.data;
    }
  };
};
