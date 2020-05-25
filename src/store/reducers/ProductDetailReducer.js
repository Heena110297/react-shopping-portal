import {
    LOAD_MOBILE_DETAIL_ERROR,
    LOAD_MOBILE_DETAIL_LOADING,
    LOAD_MOBILE_DETAIL_SUCCESS,
  } from "../actions/actions";
  const initialState = {
    data: [],
    loading: false,
    error: "",
  };
  export default function ProductDetailReducer(state = initialState, action) {
    switch (action.type) {
      case LOAD_MOBILE_DETAIL_LOADING: {
        return {
          ...state,
          loading: true,
          error: "",
        };
      }
      case LOAD_MOBILE_DETAIL_SUCCESS: {
        return {
          ...state,
          data: action.data,
          loading: false,
        };
      }
      case LOAD_MOBILE_DETAIL_ERROR: {
        return {
          ...state,
          loading: false,
          error: action.error,
        };
    }
      default: {
        return state;
      }
    }
  }
  