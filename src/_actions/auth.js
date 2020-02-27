import axios from "axios";

import { API,setAuthToken } from "../config/api";

export const getAuth = () => {
  //AUTOAUTH
  // CHECK AUTH TOKEN
  console.log("getusers");
  const token = localStorage.getItem("token");
  if (token) {
    //// cek token from server
    
    return {
      type: "GET_AUTH",
      payload: async () => {
        setAuthToken(token);
        const res = await API.get("/autoauth");
        console.log("ressss", res.data.data);
        // localStorage.setItem("token", res.data.data.token);
        // localStorage.setItem("email", res.data.data.email);
        // localStorage.setItem("userId", res.data.data.id);

        return res.data.data;
      }
    };
  } else {
    ////redirect to login page
    // console.log("no token");
    return {
      type: "LOGOUT",
      payload: {}
    };
  }
};

export const login = data => {
  console.log("data action login", data);
  return {
    type: "LOGIN",
    payload: async () => {
      const res = await API.post("/login", data);
      console.log("ressss", res.data.data);
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("email", res.data.data.email);
      localStorage.setItem("userId", res.data.data.id);

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
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("email", res.data.data.email);
      localStorage.setItem("userId", res.data.data.id);
      return res.data.data;
    }
  };
};
