import axios from 'axios';
import {types} from "./types";

function getUser(users) {
    return {
        type:types.USER,
        payload:users
    }
}

export function fetchUsers () {
    return async function (dispatch) {
            const response = await axios.get('https://reqres.in/api/users?page=2');
            const data = await response.data.data
            dispatch (getUser(data))
    };
}