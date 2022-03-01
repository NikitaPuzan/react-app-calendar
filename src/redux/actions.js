import {GET_AUTH, ADD_EVENT, EDIT_EVENT} from "./types";


export const getAuth = (username) => ({type: GET_AUTH, username})
export const addEvent = (events) => ({type: ADD_EVENT, events})
export const editEvent = (id, title) => ({type: EDIT_EVENT, id, title})