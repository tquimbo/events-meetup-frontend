import { SEARCH_EVENTS_REQUEST, SEARCH_EVENTS_SUCCESS, SEARCH_EVENTS_FAILURE } from '../redux/actionCreators.ts';

const initialState = {
  loading: false,
  results: [],
  error: '',
};

export const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_EVENTS_REQUEST:
      return { ...state, loading: true };
    case SEARCH_EVENTS_SUCCESS:
      return { ...state, loading: false, results: action.payload, error: '' };
    case SEARCH_EVENTS_FAILURE:
      return { ...state, loading: false, results: [], error: action.payload };
    default:
      return state;
  }
};