
export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

export const searchRequest = () => ({
  type: SEARCH_REQUEST,
});

export const searchSuccess = (results) => ({
  type: SEARCH_SUCCESS,
  payload: results,
});

export const searchFailure = (error) => ({
  type: SEARCH_FAILURE,
  payload: error,
});

export const fetchNearbyResults = (latitude, longitude) => async (dispatch) => {
  dispatch(nearbyRequest());
  try {
    const response = await fetch(`http://localhost:3000/api/v1/nearby?lat=${latitude}&lon=${longitude}`);
    const events = await response.json();
    dispatch(nearbySuccess(events));
  } catch (error) {
    dispatch(nearbyFailure(error.message));
  }
};

// https://api.seatgeek.com/2/events?performers.slug=${query}&client_id=MjExMjk0NjV8MTY0MTA5MDU5OC40MTYzNzQy

// http://localhost:3000/api/v1/search


// http://localhost:3000/api/v1/search