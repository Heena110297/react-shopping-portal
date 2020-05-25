import ProductsReducer from './ProductsReducer';
import ProductDetailReducer from './ProductDetailReducer';
import CartReducer from './CartReducer';

import {combineReducers} from "redux";
import AuthReducer from './AuthReducer';


const rootReducer = combineReducers({
   pdr :ProductDetailReducer,
   pr: ProductsReducer,
   cr: CartReducer,
   auth : AuthReducer
});

export default rootReducer;