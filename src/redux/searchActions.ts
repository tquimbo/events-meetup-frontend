// export const SEARCH_REQUEST = 'SEARCH_REQUEST';
// export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
// export const SEARCH_FAILURE = 'SEARCH_FAILURE';

// export const searchRequest = () => ({
//   type: SEARCH_REQUEST,
// });

// export const searchSuccess = (results) => ({
//   type: SEARCH_SUCCESS,
//   payload: results,
// });

// export const searchFailure = (error) => ({
//   type: SEARCH_FAILURE,
//   payload: error,
// });


// export const search = (query) => async (dispatch) => {
//   dispatch(searchRequest());
//   try {
//     // const response = await fetch(`http://localhost:3000/api/v1/search?query=${query}`);
//     const response = await fetch(`http://localhost:3000/api/v1/query=${query}`);
//     const results = await response.json();
//     dispatch(searchSuccess(results));
//   } catch (error) {
//     dispatch(searchFailure(error));
//   }
// };

// searchActions.js
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

export const fetchSearchResults = (query) => async (dispatch) => {
  dispatch(searchRequest());
  try {
    const response = await fetch(`https://api.seatgeek.com/2/events?performers.slug=${query}&client_id=MjExMjk0NjV8MTY0MTA5MDU5OC40MTYzNzQy`);
    const results = await response.json();
    dispatch(searchSuccess(results.events));
  } catch (error) {
    dispatch(searchFailure(error.message));
  }
};