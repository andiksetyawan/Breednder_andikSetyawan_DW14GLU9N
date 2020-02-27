import axios from "axios";

import { API } from "../config/api";

export const getAuth = () => {
  // CHECK AUTH TOKEN
  console.log("getusers");
  const token = localStorage.getItem("token");
  if (token) {
    //// cek token from server
  } else {
    ////redirect to login page
    console.log("no token");
  }
  return {
    type: "GET_AUTH",
    payload: async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log("ressss", res.data);
      return res.data;
    }
  };
  //   return dispatch => {
  //     setTimeout(() => {
  //       dispatch({
  //         type: "GET_USERS",
  //         payload: {}
  //       });
  //     }, 3000);
  //   };

  //   return {
  //     type: "GET_USERS",
  //     payload: {}
  //   };
};

export const login = data => {
  console.log("data action login", data);
  return {
    type: "LOGIN",
    payload: async () => {
      const res = await API.post("/login", data);
      console.log("ressss", res.data.data);
      return res.data.data;
    }
  };
};

export const register = data => {
  console.log("data action register", data);
  return {
    type: "REGISTER",
    payload: async () => {
      const res = await API.post("/register", data);
      console.log("ressss", res.data.data);
      return res.data.data;
    }
  };
};
