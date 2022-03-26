
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

const initialUserEvent = {
  performer_name: "",
  performer_image: "",
  venue_name: "",
  venue_address: "",
  address: "",
  attendance_status: "",
  datetime: "",
  username: "",
  first_name: "",
  last_name: "",
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
  user_events: []
}


// const initialState = {
//     events: [],
//     user_events: [],
//     user_event: initialUserEvent,
//     event: initialEvent,
//     user: initialUser,
//   }


const initialState = {
  events: [],
  user_events: [],
  search_results: [],
  user_event: initialUserEvent,
  event: initialEvent,
  user: initialUser,
}


  export function reducer(state=initialState, action){
      switch (action.type){
        case "GET_USERS":
          return{...state, users: action.payload};
          case "GET_USER":
          return{...state, user: action.payload};
      case "GET_EVENTS":
        return{...state, events: action.payload};
       case "GET_EVENT":
        return {...state, event: action.payload};
        case "GET_USER":
        return {...state, user: action.payload};
        // case "GET_RESULTS":
        //   return {...state, events: action.payload};
        case "SET_USER":
          return {...state, user: action.payload};
          case "SEARCH_RESULTS":
            return {...state, search_results: action.payload};
        case "LOGOUT":
          return {...state, user: initialUser};
          // case "ADD_EVENT":
          //   return {...state, selectedEvent: action.payload};
        case "ADD_EVENT":
            // return {...state, user_event: action.payload }
            // ;
            
            
            return {...state, user: {...state.user, user_events: [action.payload, ...state.user.user_events]}};
             
            

            // user_event: {...state.event,
            //   user_id: action.payload, ...state.event.user_id, 
            //   event_id: action.payload, ...state.event.event_id},
            // // selectedEvent: {...state, selectedEvent: action.payload},
            // // user: {...state.user, user_events: [action.payload, ...state.user.user_events]}
            // user: {...state.user, user_events: [action.payload, ...state.user.user_events]}
            // // selectedEvent: {...state.selectedEvent, event_users: [action.payload, ...state.selectedEvent.event_users]},
          
        default:
          return {...state}
     }
  }

  const exp = (state = null, action) => {
    switch (action.type) {
      case "SET_CURRENT_USER":
        return action.user
      case "CLEAR_CURRENT_USER":
        return null
      default:
        return state
    }
  }
  
  export default exp

