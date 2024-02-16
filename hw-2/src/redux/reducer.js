import {types} from "./types";

const initialState = {
    data: [],
};


export default function formsReducer (state = initialState, action) {
    if (action.type === types.ADD_DATA) {
        return {...state, data: [...state.data, action.payload],};
    }
    else {
        return state;
    }
}