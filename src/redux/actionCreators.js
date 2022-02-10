const USERURL = 'http://localhost:3000/users/'

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

export const getSearchResults = (searchQuery) => {
  return dispatch => fetch(`https://api.seatgeek.com/2/events?performers.slug=${searchQuery}
  }&client_id=MjExMjk0NjV8MTY0MTA5MDU5OC40MTYzNzQy`)
  .then(res => res.json())
  .then(events => dispatch({type: "SEARCH_RESULTS", payload: events})
  )
};


// export const getResults = () => {
//   return dispatch => fetch(`http://localhost:3000/events`)
//   .then(res => res.json())
//   .then(event => dispatch({type: "GET_RESULTS", payload: events})
//   )
// };

// export const submitSignup = (user) => {
//   return dispatch => fetch(`http://localhost:3000/users`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(user),
//   })
//   .then(res => res.json())
//   .then(response => {localStorage.token = response.token})
// };



// export const submitLogin = (user) => {
//   return dispatch => fetch(`http://localhost:3000/sessions`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(user),
//   })
//   .then(res => res.json())
//   .then(user => dispatch({type: "SET_USER", payload: user}))
// }

export const submitLogin = (user) => {
  return dispatch => fetch(`http://localhost:3000/sessions`, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(res => res.json())
  .then(response => {
    localStorage.token = response.token
    dispatch({type: "SET_USER", payload: response.user})
  })
};



export const submitSignup = (user) => {
  return dispatch => fetch(`http://localhost:3000/users`, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(res => res.json())
  .then(response => {
    localStorage.token = response.token
    dispatch({type: "SET_USER", payload: response.user})
  })
};

export const logout = () => {
  return dispatch => {
    localStorage.clear()
    dispatch({type: "LOGOUT"})
  }
}


// export const attending = (user) => {
//   return dispatch => fetch(`http://localhost:3000/events`, {
//     method: 'POST', // or 'PUT'
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(user),
//   })
//   .then(res => res.json())
//   .then(response => {
//     localStorage.token = response.token
//     dispatch({type: "SET_USER", payload: response.user})
//   })
// };


// export const attending = (maybe) => {
//   return dispatch => fetch(`http://localhost:3000/events`, {
//     method: 'POST', // or 'PUT'
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(user),
//   })
//   .then(res => res.json())
//   .then(response => {
//     localStorage.token = response.token
//     dispatch({type: "SET_USER", payload: response.user})
//   })
// };





// export const submitLogin = (user) => {
//   return dispatch => fetch(`http://localhost:3000/me`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(user),
//   })
//   .then(res => res.json())
//   .then(user => dispatch({type: "SET_USER", payload: user}))
// }

// export const autoLogin = () => {
//   return dispatch => fetch(`http://localhost:3000/me`, {
//     headers: {
//       'Authorization': localStorage.token
//   })
//   .then(res => res.json())
//   .then(user => dispatch({type: "SET_USER", payload: response.user}))
// }

// export const autoLogin = () => {
//   return dispatch => fetch(`http://localhost:3000/me`, {
//     headers: {
//       'Authorization': localStorage.token
//     }
//   })
//   .then(res => res.json())
//   .then(response => {
//     localStorage.token = response.token
//     dispatch({type: "SET_USER", payload: response.user})
//   })
// };


