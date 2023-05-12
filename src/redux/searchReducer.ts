// import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from '../redux/searchActions.ts';

// const initialState = {
//   loading: false,
//   results: [],
//   error: null,
// };

// export default function searchReducer(state = initialState, action) {
//   switch (action.type) {
//     case SEARCH_REQUEST:
//       return { ...state, loading: true, error: null };
//     case SEARCH_SUCCESS:
//       return { ...state, loading: false, results: action.payload };
//     case SEARCH_FAILURE:
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// }
// import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from '../redux/searchActions.ts';

// const initialState = {
//   loading: false,
//   results: [],
//   error: null,
// };

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_REQUEST:
      return { ...state, loading: true, error: null };
    case SEARCH_SUCCESS:
      return { ...state, loading: false, results: action.payload };
    case SEARCH_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}