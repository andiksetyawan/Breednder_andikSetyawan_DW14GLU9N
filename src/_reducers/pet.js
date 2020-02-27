import { GET_PET } from "../config/constants";

const initState = {
  data: [],
  loading: false,
  error: null
};

const pet = (state = initState, action) => {
  switch (action.type) {
    case `${GET_PET}_PENDING`:
      return {
        ...state,
        loading: true,
        error: null
      };
    case `${GET_PET}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      };
    case `${GET_PET}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: action.payload.response.data.message
      };
    default:
      return state;
  }
};

export default pet;
