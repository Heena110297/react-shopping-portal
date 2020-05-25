import Api from "../../components/api";

export const LOAD_MOBILES_LOADING = "REDUX_THUNK_LOAD_MOBILES_LOADING";
export const LOAD_MOBILES_SUCCESS = "REDUX_THUNK_LOAD_MOBILES_SUCCESS";
export const LOAD_MOBILES_ERROR = "REDUX_THUNK_LOAD_MOBILES_ERROR";
export const LOAD_MOBILE_DETAIL_LOADING =
  "REDUX_THUNK_LOAD_MOBILE_DETAIL_LOADING";
export const LOAD_MOBILE_DETAIL_SUCCESS =
  "REDUX_THUNK_LOAD_MOBILE_DETAIL_SUCCESS";
export const LOAD_MOBILE_DETAIL_ERROR = "REDUX_THUNK_LOAD_MOBILE_DETAIL_ERROR";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const loadMobiles = () => (dispatch) => {
  dispatch({ type: LOAD_MOBILES_LOADING });
  Api.getMobiles()
    .then((response) => response.json())
    .then(
      (data) => dispatch({ type: LOAD_MOBILES_SUCCESS, data }),
      (error) =>
        dispatch({
          type: LOAD_MOBILES_ERROR,
          error: error.message || "Unexpected Error!!!",
        })
    );
};

export const loadMobile = (selectedId) => (dispatch) => {
  dispatch({ type: LOAD_MOBILE_DETAIL_LOADING });
  Api.getMobile(selectedId)
    .then((response) => response.json())
    .then(
      (data) => dispatch({ type: LOAD_MOBILE_DETAIL_SUCCESS, data }),
      (error) =>
        dispatch({
          type: LOAD_MOBILE_DETAIL_ERROR,
          error: error.message || "Unexpected Error!!!",
        })
    );
};

export const addItemToCart = (item) => (dispatch) => {
  dispatch({ type: ADD_TO_CART, item: item });
};

export const removeItemFromCart = (item) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_CART, item: item });
};

export default () => {
  return { loadMobiles, loadMobile, addItemToCart, removeItemFromCart };
};
