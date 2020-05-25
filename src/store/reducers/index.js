import {
  LOAD_MOBILES_ERROR,
  LOAD_MOBILES_LOADING,
  LOAD_MOBILES_SUCCESS,
  LOAD_MOBILE_DETAIL_ERROR,
  LOAD_MOBILE_DETAIL_LOADING,
  LOAD_MOBILE_DETAIL_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../actions/actions";
const initialState = {
  cart: [],
  data: [],
  loading: false,
  error: "",
};
export default function reducer(state = initialState, action) {
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
    case ADD_TO_CART: {
      const cart = state.cart;
      console.log(cart);
      if (cart) {
        const existingProduct = cart.filter((p) => {
          return p.id === action.item.id;
        });
        if (existingProduct.length > 0) {
          existingProduct.map((p) => {
            p.id = action.item.id;
            p.name = action.item.name;
            p.price = action.item.price;
            p.image = action.item.image;
            p.qty = p.qty + 1;
            return p;
          });
        } else {
          cart.push({
            id: action.item.id,
            name: action.item.name,
            price: action.item.price,
            image: action.item.image,
            qty: 1,
          });
        }
      } else {
        console.log("ADDING PRODUCT FOR THE FIRST TIME");
        const newProduct = [
          {
            id: action.item.id,
            name: action.item.name,
            price: action.item.price,
            image: action.item.image,
            qty: 1,
          },
        ];
        console.log("prepared product" + cart);
        cart.push(newProduct);
        console.log("prepared cart:" + cart);
        console.log(JSON.stringify(localStorage.getItem("cart")));
      }
      return {
        ...state,
        cart: cart,
      };
    }
    case REMOVE_FROM_CART: {
      const cart = state.cart;
      console.log(cart);
      if (cart) {
        const existingProduct = cart.filter((p) => {
          return p.id === action.item.id;
        });
        const index = cart.findIndex(p => p.id===action.item.id && p.qty === 1);
        let deletedProduct=[];
        if(index>-1){
        deletedProduct = cart.splice(cart.findIndex(p => p.id===action.item.id && p.qty === 1),1);
        }
        if (existingProduct.length > 0 && deletedProduct.length === 0) {
          existingProduct.map((p) => {
            p.id = action.item.id;
            p.name = action.item.name;
            p.price = action.item.price;
            p.image = action.item.image;
            p.qty = p.qty - 1;
            return p;
          });
        }
      }
      return {
        ...state,
        cart: cart,
      };
    }
    default: {
      return state;
    }
  }
}
