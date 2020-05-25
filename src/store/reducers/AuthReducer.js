import {
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILURE,
  AUTHENTICATION_START,
} from "../actions/actions";
const initialState = {
 
  username: "",
  loggedIn: false,
  error: "",
};
export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATION_START: {
      return {
        ...state,
        loggedIn: false,
        error: "",
      };
    }
    case AUTHENTICATION_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
        username: action.data[0].username,
        error: "",
      };
    }

    case AUTHENTICATION_FAILURE: {
      return {
        ...state,
        loggedIn: false,
        error: "Login Failed. Please try again !",
      };
    }
    default: {
      return state;
    }
  }
}
