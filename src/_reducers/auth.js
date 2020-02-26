const initState = {
  authenticated: false,
  user: null,
  loading: false,
  error: null
};

export const auth = (state = initState, action) => {
  switch (action.type) {
    case "GET_AUTH_PENDING":
      return {
        ...state,
        loading: true
      };
    case "GET_AUTH_FULFILLED":
      console.log("payload", action.payload);
      return {
        ...state,
        // data: [...state.data, ...action.payload],
        data: action.payload,
        loading: false
      };
    case "GET_AUTH_REJECTED":
      console.log("payload", action.payload);
      return {
        ...state,
        loading: false,
        isError: true
      };
    case "LOGIN_PENDING":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "LOGIN_FULFILLED":
      console.log("masuk login fullfil");
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        loading: false,
        error: null
      };
    case "LOGIN_REJECTED":
      return {
        ...state,
        loading: false,
        error: action.payload.response.data.message
      };
    case "REGISTER_PENDING":
      console.log("masuk ad ");

      return {
        ...state,
        isLoading: true
      };
    case "REGISTER_FULFILLED":
      console.log("masuk ad 2");
      return {
        ...state,
        data: [...state.data, action.payload],
        isLoading: false
      };
    case "REGISTER_REJECTED":
      console.log("masuk ad 3");

      //  console.log("payload", action.payload);
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
};
