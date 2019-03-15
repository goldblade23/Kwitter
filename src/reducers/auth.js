import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "../actions/auth.js";

const initialState = {
  loginLoading: false,
  login: null,
  loginError: null,
  registerLoading: false,
  register: null,
  registerError: null,
  displayName: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loginLoading: true, loginError: null };

    case LOGIN_SUCCESS:
      return { ...state, login: action.payload, loginLoading: false };

    case LOGIN_FAIL:
      return { ...state, loginError: action.payload, loginLoading: false };

    case REGISTER:
      return { ...state, registerLoading: true, registerError: null };

    case REGISTER_SUCCESS:
      return { ...state, register: action.payload, registerLoading: true };

    case REGISTER_FAIL:
      return {
        ...state,
        registerError: action.payload,
        registerLoading: false
      };

    default:
      return state;
  }
};
