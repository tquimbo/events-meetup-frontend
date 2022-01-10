const initialState = {
    events: [],
    
  }

  export default function reducer(state=initialState, action){switch (action.type){
      case "GET_EVENTS":
        return(...state, events: action.payload);
        default:
            return {...state}
     }
  }