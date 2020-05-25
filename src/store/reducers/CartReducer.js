import { ADD_TO_CART, REMOVE_FROM_CART, PLACE_ORDER, ORDER_PLACED } from "../actions/actions";
const initialState = {
  cart: [],
  showModal:false
};
export default function CartReducer(state = initialState, action) {
  switch (action.type) {
   
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
        const index = cart.findIndex(
          (p) => p.id === action.item.id && p.qty === 1
        );
        let deletedProduct = [];
        if (index > -1) {
          deletedProduct = cart.splice(
            cart.findIndex((p) => p.id === action.item.id && p.qty === 1),
            1
          );
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
    case PLACE_ORDER:{
      return{...state,
      showModal :true
      }
    }
    case ORDER_PLACED:{
      return{...state,
      showModal :false,
      cart:[]
      }
    }
  
    default: {
      return state;
    }
  }
}
