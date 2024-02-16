import {types} from "./types";

export function addDataAction (data) {
    return {
        type: types.ADD_DATA,
        payload:data
    }
}