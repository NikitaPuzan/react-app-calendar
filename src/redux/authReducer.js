import {GET_AUTH} from "./types";

const initialState = {
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_AUTH:
      return {
        ...state,
        isAuth: action.auth
      }
    default:
      return state
  }
}


export default authReducer