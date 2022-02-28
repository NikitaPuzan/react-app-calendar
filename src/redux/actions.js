import {GET_AUTH} from "./types";

export const getAuth = (username) => ({type: GET_AUTH, username})