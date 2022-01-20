
const initialEvent = {
  performer_name: "",
  performer_image: "",
  venue_name: "",
  venue_address: "",
  address: "",
  attendance_status: "",
  datetime: "",
  id: "",
}


const initialState = {
    events: [],
    selectedEvent: initialEvent,
  }

  export function reducer(state=initialState, action){
      switch (action.type){
      case "GET_EVENTS":
        return{...state, events: action.payload};
       case "GET_EVENT":
        return {...state, selectedEvent: action.payload};
        case "GET_RESULTS":
          return {...state, events: action.payload};
        default:
          return {...state}
     }
  }

