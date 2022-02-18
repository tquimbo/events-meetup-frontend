
const initialEvent = {
  performer_name: "",
  performer_image: "",
  venue_name: "",
  venue_address: "",
  address: "",
  attendance_status: "",
  datetime: "",
  id: "",
  user_id: "",
  event_id: "",
  event_users: [],
}

const initialUser = {
  id: "",
  username: "",
  first_name: "",
  last_name: "",
  user_events: [],
}

// const initialUserEvent = {
//   username: "",
//   first_name: "",
//   last_name: "",
//   performer_name: "",
//   performer_image: "",
//   venue_name: "",
//   venue_address: "",
//   address: "",
//   attendance_status: "",
//   datetime: "",
//   id: "",
//   user_id: "",
//   event_id: "",
// }


const initialState = {
    events: [],
    selectedEvent: initialEvent,
    user: initialUser,
  }

  export function reducer(state=initialState, action){
      switch (action.type){
      case "GET_EVENTS":
        return{...state, events: action.payload};
       case "GET_EVENT":
        return {...state, selectedEvent: action.payload};
        // case "GET_RESULTS":
        //   return {...state, events: action.payload};
        case "SET_USER":
          return {...state, user: action.payload};
          case "SEARCH_RESULTS":
            return {...state, 
              events: action.payload};
        case "LOGOUT":
          return {...state, user: initialUser}
        case "ADD_EVENT":
            return {...state,  
            user: {...state.user, user_events: [action.payload, ...state.user.user_events]},
            selectedEvent: {...state.selectedEvent, event_users: [action.payload, ...state.selectedEvent.event_users]},
          }
        default:
          return {...state}
     }
  }

