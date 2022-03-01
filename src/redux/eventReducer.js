import {ADD_EVENT, EDIT_EVENT} from "./types";

const initialState = {
  events: [
    {id:1,title:"1 March",author:'Admin',date:1646136780},
    {id:2,title:"Someone's birthday in April",author:'Admin',date:1650370379}
  ]
}

const eventReducer = (state = initialState, action) => {
    switch (action.type){
      case EDIT_EVENT:
        return {
          ...state,
          events: state.events.map(event => {
            if(event.id === action.id){
              return {...event, title: action.title}
            }
            return event
          })
        }
      case ADD_EVENT:
        return {
          ...state,
          events:[...state.events, action.events]
        }
      default:
        return state
    }
}

export default eventReducer