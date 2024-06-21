export const FETCH_TRENDING_EVENTS_REQUEST = 'FETCH_TRENDING_EVENTS_REQUEST';
export const FETCH_TRENDING_EVENTS_SUCCESS = 'FETCH_TRENDING_EVENTS_SUCCESS';
export const FETCH_TRENDING_EVENTS_FAILURE = 'FETCH_TRENDING_EVENTS_FAILURE';

export const fetchTrendingEventsRequest = () => ({
  type: FETCH_TRENDING_EVENTS_REQUEST,
});

export const fetchTrendingEventsSuccess = (events) => ({
  type: FETCH_TRENDING_EVENTS_SUCCESS,
  payload: events,
});

export const fetchTrendingEventsFailure = (error) => ({
  type: FETCH_TRENDING_EVENTS_FAILURE,
  payload: error,
});

export const fetchTrendingEvents = () => {
    return async (dispatch) => {
      dispatch(fetchTrendingEventsRequest());
      try {
        const response = await fetch('http://localhost:3000/events/trending');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        dispatch(fetchTrendingEventsSuccess(data));
      } catch (error) {
        dispatch(fetchTrendingEventsFailure(error.message));
      }
    };
  

// export const fetchTrendingEvents = () => {
//   return async (dispatch) => {
//     dispatch(fetchTrendingEventsRequest());
//     try {
//       const response = await fetch('http://localhost:3000/events/trending');
//       const data = await response.json();
//       dispatch(fetchTrendingEventsSuccess(data));
//     } catch (error) {
//       dispatch(fetchTrendingEventsFailure(error.message));
//     }
//   };
};