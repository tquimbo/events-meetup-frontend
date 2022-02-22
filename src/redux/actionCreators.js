import { reducer } from "./reducer";

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

// export const getUser = (userId) => {
//   debugger
//   return dispatch => fetch(`http://localhost:3000/users/${userId}`)
//   .then(res => res.json())
//   .then(user => dispatch({type: "GET_USER", payload: user})
//   )
// };
export const getUser = (userId) => {
  return (dispatch) => {
      dispatch({ type: 'GET_USER'})
      let config = {
          method: 'GET',
          headers: {
              "Authorization": `bearer ${localStorage.token}`
          }
      }
      fetch(`http://localhost:3000/users/${userId}`, config).then(response => {
          return response.json()
      }).then(responseJSON => {
          dispatch({ type: 'GET_USER', user: responseJSON})
      })
  }
}

export const addEvent = (userID, eventID) => {

  debugger

  return dispatch => fetch(`http://localhost:3000/user_events`, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.token
    },
    body: JSON.stringify(userID),
  })
  .then(res => res.json())
  .then(response => {
    dispatch({type: "ADD_EVENT", payload: response.user })
  })
};

// export const addEvent = () => (dispatch, getState) => {

  
//   // will hit reducer
//   const user = getState().user;
//   const userId = getState().user.id;
//   const eventId = getState().selectedEvent.id;
//   console.log(user)
//   console.log(userId) // should output the updated data
//   console.log(eventId)ge
//   debugger

//   return dispatch => fetch(`http://localhost:3000/user/${userId}/user_events`, {
//         method: 'POST', // or 'PUT'
//         headers: {
//           'Content-Type': 'application/json',
          
//         },
//         body: JSON.stringify(user),
//       })
//       .then(res => res.json())
//       .then(response => {
//         dispatch({type: "ADD_EVENT", payload: response.user })
//       })
//     };

// export const addEvent = (userEventData, history) => {
//   return dispatch => {
//     const sendableuserEventData = {
//         user_id: userEventData.userId,
//     }
//     return fetch(`http://localhost:3000/user/${userId}/user_events`, {
//       credentials: "include",
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(sendableuserEventData)
//     })
//     .then(r => r.json())
//     .then(resp => {
//       if (resp.error) {
//         alert(resp.error)
//       } 
//       else {
//         dispatch(addEvent)
//         history.push(`/user_events/${resp.data.id}`)
//       }
//     })
//   }
// }

// export const getSearchResults = (searchQuery) => {
//   return dispatch => fetch(`http://localhost:3000/events`, {
//     method: 'POST', // or 'PUT'
//     headefirs: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(searchQuery),
//   })
//   .then(res => res.json())
//   .then(response => {
//     dispatch({type: "SEARCH_RESULTS", payload: response.events})
//   })
// };

export const submitLogin = (user) => {
  return dispatch => fetch(`http://localhost:3000/sessions`, {
    method: 'POST',
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
    method: 'POST',
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

function handleUserResponse(res, dispatch){
  if (res.ok) {
    res.json()
    .then(response => {
      localStorage.token = response.token
      dispatch({type: "SET_USER", payload: response.user})
    })
  } else {
    res.json()
    .then(res => alert(res.errors))
  }
}

// export const getSearchResults = (searchQuery) => {
//   return dispatch => fetch(`https://api.seatgeek.com/2/events?performers.slug=${searchQuery}&client_id=MjExMjk0NjV8MTY0MTA5MDU5OC40MTYzNzQy`)
//   .then(res => {
//     //debugger
//     return res.json()})
//   .then(
//     (json) => {
//     debugger
//     json.events.map(event => {
//     return { 
//       performer_name: event.performers[0].name,

//      }
//   }
//   )
// })
//   .then(events => dispatch({type: "SEARCH_RESULTS", payload: events})
//   )
// };

// export const getSearchResults = (searchQuery) => {
//   return dispatch => fetch(`https://api.seatgeek.com/2/events?performers.slug=${searchQuery}&client_id=MjExMjk0NjV8MTY0MTA5MDU5OC40MTYzNzQy`)
//   .then(res => {
//     return res.json()})
//   .then(
//     (json) => {
//     json.events.map(event => {
    
//       event.performers[0].name

//      })
     
// //   }
//   ).then(events => dispatch({type: "SEARCH_RESULTS", payload: events}))
  
// };
// )
//   .then(events => dispatch({type: "SEARCH_RESULTS", payload: events})
//   )
// };



// export const getSearchResults = (searchQuery) => {
//   return dispatch => fetch(`https://api.seatgeek.com/2/events?performers.slug=${searchQuery}&client_id=MjExMjk0NjV8MTY0MTA5MDU5OC40MTYzNzQy`)
//   .then(res => {
//     debugger
//     return res.json()})
//   .then(
//     (json) => {
//     json.events.map(event => 
//       event.venue.name
//       // (performer_name: event.performers[0].name),
//       // (performer_image: event.performers[0].image),
//       // (venue_name: event.venue.name),
//       // (venue_address: event.venue.extended_address),
//       // (datetime: event.datetime_local)

      
//     );
    
//   }).then(events => 
//     dispatch({type: "SEARCH_RESULTS", payload: events})
//   )};
//   dispatch({type: "SEARCH_RESULTS", payload: json.events})
// } )}
  
//   .then(events => dispatch({type: "SEARCH_RESULTS", payload: events}))
// };

export const getSearchResults = (searchQuery) => {
  return dispatch => fetch(`https://api.seatgeek.com/2/events?performers.slug=${searchQuery}&client_id=MjExMjk0NjV8MTY0MTA5MDU5OC40MTYzNzQy`)
  .then(res => res.json())
  .then(events => dispatch({type: "SEARCH_RESULTS", payload: events})
  )
};

export const autoLogin = () => {
  return dispatch => fetch(`http://localhost:3000/me`, {
    headers: {
      'Authorization': localStorage.token
    }
  })
  .then(res => handleUserResponse(res, dispatch))
}



