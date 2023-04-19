import { flatten } from "lodash";
import { SEARCH_EVENTS_REQUEST, SEARCH_EVENTS_SUCCESS, SEARCH_EVENTS_FAILURE } from '../actions/searchActions';


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

const initialSearchResult = {
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
  userEvents: [],
  events: []
}


// const initialState = {
//     events: [],
//     user_events: [],
//     user_event: initialUserEvent,
//     event: initialEvent,
//     user: initialUser,
//   }


const initialState = {
  search: [],
  events: [],
  event: initialEvent,
  user: initialUser,
  isFetching: true,
  finish: false,
  error: null,
  list: [],
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
        case "GET_SEARCH":
          return {...state, event: action.payload};
        // case "GET_USER":
        // return {...state, user: action.payload};
        // case "GET_RESULTS":
        //   return {...state, events: action.payload};
        case "SET_USER":
          return {...state, user: action.payload};
          case "SEARCH_RESULTS":
            return {...state, search: action.payload};
            // return {...state, search_results: {...state.search_results, events: [action.payload, ...state.search_results.events]}};
        case "LOGOUT":
          return {...state, user: initialUser};
          // case "ADD_EVENT":
          //   return {...state, selectedEvent: action.payload};
        case "ADD_EVENT":
            // return {...state, user_event: action.payload }
            // ;
            
            
            return {...state, user: {...state.user, userEvents: [action.payload, ...state.user.userEvents]}};

            case "EVENTS_FETCH_PENDING":
      // console.log("EVENTS_FETCH_PENDING");
      return { ...state, isFetching: true, error: null };
    case "EVENTS_FETCH_SUCCESS":
      // console.log("EVENTS_FETCH_SUCCESS");
      return {
        ...state,
        isFetching: false,
        error: null,
        list: flatten(action.payload),
        finish: action.finish
      };
    case "EVENTS_FETCH_MORE":
      // console.log("EVENTS_FETCH_MORE");
      return {
        ...state,
        isFetching: false,
        error: null,
        list: state.list.concat(flatten(action.payload)),
        finish: action.finish
      };
    case "EVENT_DETAILS_FETCH_PENDING":
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case "EVENT_DETAILS_FETCH_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: null,
        event: action.payload
      };
             
            

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

  function userReducer(state = { user: {}, loading: false, userStatsLoading: false, userStats: {} }, action){
    switch(action.type){
        case "LOGIN_USER":
            return state;
        case "LOADING_USER":
            return{
                ...state,
                user: {...state.user},
                loading: true,
            }
        case 'ADD_USER':
            return{
                ...state,
                user: action.user,
                loading: false
            }
        case "RESET_TO_DEFAULT":
            return {...state,
                user: {}, 
                loading: false,
                userStatsLoading: false, 
                userStats: {},
            };
        case "LOADING_USER_STATS":
            return {...state,
            userStatsLoading: true,
            }
        case "ADD_USER_STATS":
            return {...state,
            userStats: action.stats,
            userStatsLoading: false,
            }
        default:
            return state
    }
}


// const initialState = {
//   loading: false,
//   results: [],
//   error: '',
// };

// export const searchReducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case SEARCH_EVENTS_REQUEST:
//       return { ...state, loading: true };
//     case SEARCH_EVENTS_SUCCESS:
//       return { ...state, loading: false, results: action.payload, error: '' };
//     case SEARCH_EVENTS_FAILURE:
//       return { ...state, loading: false, results: [], error: action.payload };
//     default:
//       return state;
//   }
// };


//   export default exp


