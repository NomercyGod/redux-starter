import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";

let token = localStorage.getItem("token");
const initalState = {
  loading: false,
  error: false,
  isAuth: token ? true : false ,   // isAuth: !!token  is also valid
  token: token,
};


// ---------->  CONCEPT <-------------

// let a = "abc"
// and console.log(!a) = false
// and console.log(!!a) true , which we have did in line no 12

// <-------------------------------------->


export const authReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case LOGIN_SUCCESS: {
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loading: false,
        error: false,
        isAuth: true,
        token: payload.token,
      };
    }
    case LOGIN_ERROR: {
      return { ...state, loading: false, error: true, isAuth: false };
    }
    case LOGOUT: {
      localStorage.removeItem("token");
      return { ...state, isAuth: false, token: "" };
    }
    default: {
      return state;
    }
  }
};
