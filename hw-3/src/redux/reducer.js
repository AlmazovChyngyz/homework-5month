// reducer.js
//
// const initialState = {
//     users: [],
//     error: null,
// };
//
// const userReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'FETCH_USERS_SUCCESS':
//             return {
//                 ...state,
//                 users: action.payload,
//                 error: null,
//             };
//         case 'FETCH_USERS_FAILURE':
//             return {
//                 ...state,
//                 error: action.payload,
//             };
//         default:
//             return state;
//     }
// };
//
// export default userReducer;

import {combineReducers} from "redux";
import titleReducer from "./titleReducer";
export const rootReducer = combineReducers({
    titleReducer
})