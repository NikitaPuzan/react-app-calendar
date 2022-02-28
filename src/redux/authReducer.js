import {GET_AUTH} from "./types";

const initialState = {
  isAuth: false,
  username: ''
}

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_AUTH:
      return {
        ...state,
        isAuth: true,
        username: action.username
      }
    default:
      return state
  }
}


export default authReducer