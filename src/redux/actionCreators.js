export const getEvents = () => {
  return dispatch => fetch('http://localhost:3000/events')
  .then(res => res.json())
  .then(events => dispatch({type: "GET_EVENTS", payload: events})
  )
};

export const getEvent = (eventId) => {
  return dispatch => fetch(`http://localhost:3000/events/${eventId}`)
  .then(res => res.json())
  .then(event => dispatch({type: "GET_EVENT", payload: event})
  )
};

// export const getResults = () => {
//   return dispatch => fetch(`http://localhost:3000/events`)
//   .then(res => res.json())
//   .then(event => dispatch({type: "GET_RESULTS", payload: events})
//   )
// };

export const submitSignup = (user) => {
  return dispatch => fetch(`http://localhost:3000/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(res => res.json())
  .then(console.log)
}


export const submitLogin = (user) => {
  return dispatch => fetch(`http://localhost:3000/sessions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(res => res.json())
  .then(console.log)
}