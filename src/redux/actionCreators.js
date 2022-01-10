export const getEvents = () => {
  return dispatch => fetch("http://localhost:3000/events")
  .then(res => res.json())
  .then(events => dispatch({type: "GET_EVENTS", payload: events})
  )
}
