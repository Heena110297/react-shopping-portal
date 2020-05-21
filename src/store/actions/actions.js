import Api from "../../components/api";

export const LOAD_MOBILES_LOADING = 'REDUX_THUNK_LOAD_MOBILES_LOADING';
export const LOAD_MOBILES_SUCCESS = 'REDUX_THUNK_LOAD_MOBILES_SUCCESS';
export const LOAD_MOBILES_ERROR = 'REDUX_THUNK_LOAD_MOBILES_ERROR';
export const LOAD_MOBILE_DETAIL_LOADING = 'REDUX_THUNK_LOAD_MOBILE_DETAIL_LOADING';
export const LOAD_MOBILE_DETAIL_SUCCESS = 'REDUX_THUNK_LOAD_MOBILE_DETAIL_SUCCESS';
export const LOAD_MOBILE_DETAIL_ERROR = 'REDUX_THUNK_LOAD_MOBILE_DETAIL_ERROR';

export const loadMobiles = () => dispatch => {
   dispatch({ type: LOAD_MOBILES_LOADING });
   Api.getMobiles()
       .then(response => response.json())
       .then(
           data => dispatch({ type: LOAD_MOBILES_SUCCESS, data }),
           error => dispatch({ type: LOAD_MOBILES_ERROR, error: error.message || 'Unexpected Error!!!' })
       )
};

export const loadMobile = (selectedId) => dispatch => {
    dispatch({ type: LOAD_MOBILE_DETAIL_LOADING });
    Api.getMobile(selectedId)
        .then(response => response.json())
        .then(
            data => dispatch({ type: LOAD_MOBILE_DETAIL_SUCCESS, data }),
            error => dispatch({ type: LOAD_MOBILE_DETAIL_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
 };

 export default () => {
    return { loadMobiles, loadMobile } 
 }