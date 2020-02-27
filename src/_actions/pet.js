import { API } from "../config/api";
import { GET_PET } from "../config/constants";

export const getPets = () => {
  console.log("masuk get PET actions");
  return {
    type: GET_PET,
    payload: async () => {
      const res = await API.get("/pets");
      console.log("ressss Users", res.data.data);
      return res.data.data;
    }
  };
};
