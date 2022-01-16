
const initialEvent = {
  performer_name: "",
  performer_image: "",
  venue_name: "",
  address: "",
  attendance_status: "",
  id: null,
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
        default:
          return {...state}
     }
  }

