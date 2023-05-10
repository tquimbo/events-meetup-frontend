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

export const search = (query) => async (dispatch) => {
  dispatch(searchRequest());
  try {
    const response = await fetch(`/api/v1/search?query=${query}`);
    const results = await response.json();
    dispatch(searchSuccess(results));
  } catch (error) {
    dispatch(searchFailure(error));
  }
};