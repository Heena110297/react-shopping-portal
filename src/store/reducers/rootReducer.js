import ProductsReducer from './ProductsReducer';
import ProductDetailReducer from './ProductDetailReducer';
import CartReducer from './CartReducer';

import {combineReducers} from "redux";


const rootReducer = combineReducers({
   pdr :ProductDetailReducer,
   pr: ProductsReducer,
   cr: CartReducer
});

export default rootReducer;