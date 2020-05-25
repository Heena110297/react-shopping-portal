import {
  LOAD_MOBILES_ERROR,
  LOAD_MOBILES_LOADING,
  LOAD_MOBILES_SUCCESS,
  LOAD_MOBILES_ON_SEARCH,
  LOAD_MOBILES_ON_CLEAR,
} from "../actions/actions";

const initialState = {
  searchResult: [],
  showSearchResults: false,
  data: [],
  loading: false,
  error: "",
};
export default function ProductsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MOBILES_LOADING: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case LOAD_MOBILES_SUCCESS: {
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    }
    case LOAD_MOBILES_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case LOAD_MOBILES_ON_SEARCH: {
      return {
        ...state,
        loading:false,
        showSearchResults:true,
        searchResult: action.data,
      };
    }
    case LOAD_MOBILES_ON_CLEAR: {
      return {
        ...state,
        loading:false,
        showSearchResults:false,
        searchResult: [],
      };
    }
    default: {
      return state;
    }
  }
}
