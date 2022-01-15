export const getEvents = () => {
  return dispatch => fetch("http://localhost:3000/events")
  .then(res => res.json())
  .then(events => dispatch({type: "GET_EVENTS", payload: events})
  )
};

export const getEvent = (id) => {
  return dispatch => fetch(api + `/events/${id}`)
  .then(res => res.json())
  .then(event => dispatch({type: "GET_EVENT", payload: event})
  )
}



// export const getAPIEvents = () => {
//   return dispatch => fetch("https://api.seatgeek.com/2/events?client_id=MjExMjk0NjV8MTY0MTA5MDU5OC40MTYzNzQy")
//   .then(res => res.json())
//   .then(events => dispatch({type: "GET_EVENTS", payload: events})
//   )
// }
