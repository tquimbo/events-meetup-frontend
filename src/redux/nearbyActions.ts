
export const NEARBY_REQUEST = 'NEARBY_REQUEST';
export const NEARBY_SUCCESS = 'NEARBY_SUCCESS';
export const NEARBY_FAILURE = 'NEARBY_SUCCESS';

export const nearbyRequest = () => ({
  type: NEARBY_REQUEST,
});

export const nearbySuccess = (results) => ({
  type: NEARBY_SUCCESS,
  payload: results,
});

export const nearbyFailure = (error) => ({
  type: NEARBY_SUCCESS,
  payload: error,
});

export const fetchNearbyEvents = (latitude, longitude) => async (dispatch) => {
    dispatch(nearbyRequest());
    try {
      const response = await fetch(`http://localhost:3000/api/v1/nearby?lat=${latitude}&lon=${longitude}`);
      const events = await response.json();
      dispatch(nearbySuccess(events));
    } catch (error) {
      dispatch(nearbyFailure(error.message));
    }
  };
  