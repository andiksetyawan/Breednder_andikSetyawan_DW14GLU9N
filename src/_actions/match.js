import { API } from "../config/api";
import { GET_MATCH } from "../config/constants";

export const getMatch = pet_id => {
  console.log("masuk get match actions");
  return {
    type: GET_MATCH,
    payload: async () => {
      const res = await API.get("/matches?pet_id=" + pet_id + "&status=true");
      console.log("ressss data match true", res.data.data);
      return res.data.data;
    }
  };
};
