import Api from "../../components/api";

export const LOAD_MOBILES_LOADING = "REDUX_THUNK_LOAD_MOBILES_LOADING";
export const LOAD_MOBILES_SUCCESS = "REDUX_THUNK_LOAD_MOBILES_SUCCESS";
export const LOAD_MOBILES_ERROR = "REDUX_THUNK_LOAD_MOBILES_ERROR";

export const AUTHENTICATION_SUCCESS = "AUTHENTICATION_SUCCESS";
export const AUTHENTICATION_FAILURE = "AUTHENTICATION_FAILURE";
export const AUTHENTICATION_START = "AUTHENTICATION_START";

export const LOAD_MOBILE_DETAIL_LOADING =
  "REDUX_THUNK_LOAD_MOBILE_DETAIL_LOADING";
export const LOAD_MOBILE_DETAIL_SUCCESS =
  "REDUX_THUNK_LOAD_MOBILE_DETAIL_SUCCESS";
export const LOAD_MOBILE_DETAIL_ERROR = "REDUX_THUNK_LOAD_MOBILE_DETAIL_ERROR";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const PLACE_ORDER = "PLACE_ORDER";
export const ORDER_PLACED = "ORDER_PLACED";

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

export const placeOrder = () => (dispatch) => {
  dispatch({ type: PLACE_ORDER });
};

export const orderPlaced = () => (dispatch) => {
  dispatch({ type: ORDER_PLACED });
};

export const authenticate =(email,password) =>(dispatch) =>{
  dispatch({type: AUTHENTICATION_START});
  Api.getUser(email,password)
    .then((response) => response.json())
    .then(
      (data) => dispatch({ type: AUTHENTICATION_SUCCESS, data }),
      (error) =>
        dispatch({
          type: AUTHENTICATION_FAILURE,
          error: error.message || "Login Failed",
        })
    );
}
export default () => {
  return { loadMobiles, loadMobile, addItemToCart, removeItemFromCart, authenticate };
};
