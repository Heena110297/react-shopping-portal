import {LOAD_MOBILES_ERROR, LOAD_MOBILES_LOADING, LOAD_MOBILES_SUCCESS, LOAD_MOBILE_DETAIL_ERROR,LOAD_MOBILE_DETAIL_LOADING,LOAD_MOBILE_DETAIL_SUCCESS} from "../actions/actions";
const initialState = {
   cart:[],
   data: [],
   loading: false,
   error: ''
};
export default function reducer(state = initialState, action) {
   switch (action.type) {
       case LOAD_MOBILES_LOADING: {
           return {
               ...state,
               loading: true,
               error:''
           };
       }
       case LOAD_MOBILES_SUCCESS: {
           return {
               ...state,
               data: action.data,
               loading: false
           }
       }
       case LOAD_MOBILES_ERROR: {
           return {
               ...state,
               loading: false,
               error: action.error
           };
       }
       case LOAD_MOBILE_DETAIL_LOADING: {
        return {
            ...state,
            loading: true,
            error:''
        };
    }
    case LOAD_MOBILE_DETAIL_SUCCESS: {
        return {
            ...state,
            data: action.data,
            loading: false
        }
    }
    case LOAD_MOBILE_DETAIL_ERROR: {
        return {
            ...state,
            loading: false,
            error: action.error
        };
    }
       default: {
           return state;
       }
   }
}