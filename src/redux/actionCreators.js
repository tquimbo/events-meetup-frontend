import { reducer } from "./reducer";
import axios from "axios";



const USERURL = 'http://localhost:3000/users/'

export const getEvents = () => {
  return dispatch => fetch('http://localhost:3000/events')
  .then(res => res.json())
  .then(events => dispatch({type: "GET_EVENTS", payload: events})
  )
  
};



// export const fetchUser = (userId) => {
//   return (dispatch) => {
//       dispatch({ type: 'LOADING_USER'})
//       let config = {
//           method: 'GET',
//           headers: {
//               "Authorization": `bearer ${localStorage.token}`
//           }
//       }
//       fetch(`http://localhost:3000/users/${userId}`, config).then(response => {
//           return response.json()
//       }).then(responseJSON => {
//           dispatch({ type: 'ADD_USER', user: responseJSON})
//       })
//   }
// }


// export const getEvents = () => {
//   return dispatch => fetch('http://localhost:3000/events')
//   .then(res => res.json())
//   .then(events => dispatch({type: "GET_EVENTS", payload: events})
//   )
  
// };

// export const getUsers = () => {
//   return dispatch => fetch('http://localhost:3000/users')
//   .then(res => res.json())
//   .then(users => dispatch({type: "GET_USERS", payload: users})
//   )
  
// };

// export const getUser = (userId) => {
//   return dispatch => fetch(`http://localhost:3000/users/${userId}`)
//   .then(res => res.json())
//   .then(user => dispatch({type: "GET_USER", payload: user})
//   )
// };





export const getEvent = (eventId) => {
  return dispatch => fetch(`http://localhost:3000/events/${eventId}`)
  .then(res => res.json())
  .then(event => dispatch({type: "GET_EVENT", payload: event})
  )
};

// export const getUser = (userId) => {
//   return dispatch => fetch(`http://localhost:3000/users/${userId}`)
//   .then(res => res.json())
//   .then(user => dispatch({type: "GET_USER", payload: user})
//   )
// };

// export const setCurrentUser = user => {
//   return {
//     type: "SET_CURRENT_USER",
//     user // same as user: user 
//   }
// }
// export const getUser = (userId) => {
//   return (dispatch) => {
//       dispatch({ type: 'GET_USER'})
//       let config = {
//           method: 'GET',
//           headers: {
//               "Authorization": `bearer ${localStorage.token}`
//           }
//       }
//       fetch(`http://localhost:3000/users/${userId}`, config).then(response => {
//           return response.json()
//       }).then(responseJSON => {
//           dispatch({ type: 'GET_USER', user: responseJSON})
//       })
//   }
// }

// export const addEvent = (user_event_data) => {
//   return (dispatch) => {

  
//     const user_event = {
//       performer_name: user_event_data.event.performerName,
//       // performer_image: user_event_data.event.performerImage,
//       venue_name: user_event_data.event.venueName,
//       venue_address: user_event_data.event.venueAddress,
//       username: user_event_data.user.username,
//       first_name: user_event_data.user.firstName,
//       last_name: user_event_data.user.lastName,
//       user_id: user_event_data.user.id,
//       event_id: user_event_data.event.id,
//     }


//       dispatch({ type: 'ADD_EVENT'})
//       let config = {
//           method: 'POST',
//           headers: {
//               "Content-Type": "application/json",
//               "Authorization": `bearer ${localStorage.token}`
//           },
//           // body: JSON.stringify(user_event)
//       }
//       fetch(`http://localhost:3000/users/${user_event_data.user.id}/user_events`, config).then(response => {
//           return response.json()
//       }).then(responseJSON => {
//           dispatch({ type: 'ADD_EVENT', payload: responseJSON})
//       })
//   }
// }


// export const addEvent = (user_event_data) => {
//   return (dispatch) => {
//     dispatch({ type: 'ADD_EVENT'})
  
  
//   //return dispatch => {
//     const user_event = {
//       performer_name: user_event_data.event.performerName,
//       // performer_image: user_event_data.event.performerImage,
//       venue_name: user_event_data.event.venueName,
//       venue_address: user_event_data.event.venueAddress,
//       username: user_event_data.user.username,
//       first_name: user_event_data.user.firstName,
//       last_name: user_event_data.user.lastName,
//       user_id: user_event_data.user.id,
//       event_id: user_event_data.event.id,
//     }
//   //}
    
  

//   return dispatch => fetch(`http://localhost:3000/users/${user_event_data.user.id}/user_events`, {

//     var config = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       // "Authorization": 'Bearer {localStorage.token}'
//       "Authorization": `bearer ${localStorage.token}`
//     },
//     body: JSON.stringify(user_event)

//   }fetch(`http://localhost:3000/users/${user_event_data.user.id}/user_events`, config).then(response => {
//     return response.json()
    
//   }).then(response => {
//     dispatch({type: "ADD_EVENT", payload: response })
    
//   })
 
// }}};

export const addEvent = (user_event_data) => {
  
  
  //return dispatch => {
    const user_event = {
      performer_name: user_event_data.event.performerName,
      // performer_image: user_event_data.event.performerImage,
      venue_name: user_event_data.event.venueName,
      venue_address: user_event_data.event.venueAddress,
      username: user_event_data.user.username,
      first_name: user_event_data.user.firstName,
      last_name: user_event_data.user.lastName,
      user_id: user_event_data.user.id,
      event_id: user_event_data.event.id,
    }
  //}
    
  

  return dispatch => fetch(`http://localhost:3000/users/${user_event_data.user.id}/user_events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "Authorization": 'Bearer {localStorage.token}'
      "Authorization": `bearer ${localStorage.token}`
    },
    body: JSON.stringify(user_event)
    
  })  .then(res => {
    if (res.ok) {
      res.json().then(user_event => dispatch({type: "ADD_EVENT", payload: user_event})).catch(e => {
        console.log(e);
    })
    } else {
      res.json().then(res => alert(res.errors))
    }
  })}



export const getUser = (userId) => {
  return dispatch => fetch(`http://localhost:3000/users/${userId}`)
  .then(res => res.json())
  .then(user => dispatch({type: "GET_USER", payload: user})
  )
};


// export const addEvent = (user_event_data) => {


//   //return dispatch => {
//     const user = {
//       performer_name: user_event_data.event.performer_name,
//       performer_image: user_event_data.event.performer_image,
//       venue_name: user_event_data.event.venue_name,
//       venue_address: user_event_data.event.venue_address,
//       username: user_event_data.user.username,
//       first_name: user_event_data.user.first_name,
//       last_name: user_event_data.user.last_name,
//       user_id: user_event_data.user.id,
//       event_id: user_event_data.event.id,
//     }
//   //}



//   return dispatch => fetch(`http://localhost:3000/user_events`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `bearer ${localStorage.token}`
//     },
//     body: JSON.stringify(user)

//   })
//   .then(res => {
//     if (res.ok) {
//       res.json().then(user => dispatch({type: "ADD_EVENT", payload: user}))
//     } else {
//       res.json().then(res => alert(res.errors))
//     }
//   })
// }

// export const addEvent = (user_event_data) => {


//   //return dispatch => {
//     const user = {
//       performer_name: user_event_data.event.performer_name,
//       performer_image: user_event_data.event.performer_image,
//       venue_name: user_event_data.event.venue_name,
//       venue_address: user_event_data.event.venue_address,
//       username: user_event_data.user.username,
//       first_name: user_event_data.user.first_name,
//       last_name: user_event_data.user.last_name,
//       user_id: user_event_data.user.id,
//       event_id: user_event_data.event.id,
//     }
//   //}



//   return dispatch => fetch(`http://localhost:3000/user_events`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `bearer ${localStorage.token}`
//     },
//     body: JSON.stringify(user)

//   })
//   .then(res => res.json()).then(user => dispatch({type: "ADD_EVENT", payload: user })).catch(e => {console.log(JSON.parse(''))})
// };

// export const addEvent = (user_event_data) => {


//   //return dispatch => {
//     const user = {
//       performer_name: user_event_data.event.performer_name,
//       performer_image: user_event_data.event.performer_image,
//       venue_name: user_event_data.event.venue_name,
//       venue_address: user_event_data.event.venue_address,
//       username: user_event_data.user.username,
//       first_name: user_event_data.user.first_name,
//       last_name: user_event_data.user.last_name,
//       user_id: user_event_data.user.id,
//       event_id: user_event_data.event.id,
//     }
//   //}



//   return dispatch => fetch(`http://localhost:3000/user_events`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `bearer ${localStorage.token}`
//     },
//     body: JSON.stringify(user)

//   })
//   .then(response => {
//     return response.json()}).then(user => 
    
//     dispatch({type: "ADD_EVENT", payload: user })).catch(e => {
//     console.log(e);
// })

// };









// export const addEvent = (user_event_data) => {


//   //return dispatch => {
//     const user = {
//       performer_name: user_event_data.event.performer_name,
//       performer_image: user_event_data.event.performer_image,
//       venue_name: user_event_data.event.venue_name,
//       venue_address: user_event_data.event.venue_address,
//       username: user_event_data.user.username,
//       first_name: user_event_data.user.first_name,
//       last_name: user_event_data.user.last_name,
//       user_id: user_event_data.user.id,
//       event_id: user_event_data.event.id,
//     }
//   //}



//   return dispatch => fetch(`http://localhost:3000/user_events`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `bearer ${localStorage.token}`
//     },
//     body: JSON.stringify(user)

//   })
//   .then(res => res.json())
//   .then(user => 
    
//     dispatch({type: "ADD_EVENT", payload: user })).catch(e => {
//     console.log(e);
// })

// };



// export const addEvent = (user_event_data) => {
  
  
  
//   //return dispatch => {
//     const user = {
//       performer_name: user_event_data.event.performerName,
//       // performer_image: user_event_data.event.performerImage,
//       venue_name: user_event_data.event.venueName,
//       venue_address: user_event_data.event.venueAddress,
//       username: user_event_data.user.username,
//       first_name: user_event_data.user.firstName,
//       last_name: user_event_data.user.lastName,
//       user_id: user_event_data.user.id,
//       event_id: user_event_data.event.id,
//     }
//   //}
    
  

//   return dispatch => fetch(`http://localhost:3000/user_events`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       // "Authorization": 'Bearer {localStorage.token}'
//       "Authorization": `${localStorage.token}`
//     }, 
//     body: JSON.stringify(user.user_event)
    
//   }).then(res => {
//     if (res.ok) {
//       res.json().then(user => dispatch({type: "ADD_EVENT", payload: user.user_event}))
//     } else {
//       res.json().then(res => alert(res.errors))
//     }
//   })
// }



  

//   .then(res => res.json())
//   .then(user => {
//     dispatch({type: "ADD_EVENT", user })
    
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

export const autoLogin = () => {
  return dispatch => fetch(`http://localhost:3000/me`, {
    headers: {
      'Authorization': localStorage.token
    }
  })
  .then(res => handleUserResponse(res, dispatch))
}


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
//     return res.json()})
//   .then(
//     (json) => {debugger
//     json.events.map(event => 
//       {return {
//       name: event.venue.name,
//       address: event.venue.extended_address,
//       performer_name: event.performers[0].name
//       } 
      
//     } 
    
    
//     )}).then(res => {return res.json()}).then(search_results => {dispatch({type: "SEARCH_RESULTS", payload: search_results})})}

//this gets correct 
// export const getSearchResults = (searchQuery) => {
//   return dispatch => fetch((`https://api.seatgeek.com/2/events?performers.slug=${searchQuery}&client_id=MjExMjk0NjV8MTY0MTA5MDU5OC40MTYzNzQy`)
//   .then(res => res.json()).then(search_results => {dispatch({type: "SEARCH_RESULTS", payload: search_results})}).catch(error => {
//       console.error('Error:', error);
//     })
//     };

// export const getSearchResults = (searchQuery) => {
//   return dispatch => fetch(`https://api.seatgeek.com/2/events?performers.slug=${searchQuery}&client_id=MjExMjk0NjV8MTY0MTA5MDU5OC40MTYzNzQy`).then(res => res.json()).then(search => {dispatch({type: "SEARCH_RESULTS", payload: search})}).catch(error => {
//       console.error('Error:', error);
//     });
    
//     }


    export const getSearchResults = (page = 1, searchQuery) => {
      const limit = 20;
      // console.log(page, performerId);
    
      return dispatch => {
        dispatch({ type: "EVENTS_FETCH_PENDING" });
    
        let reqUrl;
    
        if (searchQuery) {
          reqUrl = `https://api.seatgeek.com/2/events?performers.slug=${searchQuery}&client_id=MjExMjk0NjV8MTY0MTA5MDU5OC40MTYzNzQy`
         
        } else {
          reqUrl = `https://api.seatgeek.com/2/events?performers.slug=${searchQuery}&client_id=MjExMjk0NjV8MTY0MTA5MDU5OC40MTYzNzQy`;
        }
    
        axios.get(reqUrl).then(res => {
          // console.log(res.data.events.length);
          let finish = false;
          if (res.data.events.length < limit) {
            finish = true;
          }
    
          if (page == 1) {
            dispatch({
              type: "EVENTS_FETCH_SUCCESS",
              payload: res.data.events,
              finish
            });
          } else {
            dispatch({ type: "EVENTS_FETCH_MORE", payload: res.data.events, finish });
          }
        });
      };
    };
    
    export const fetchEventDetails = (page = 1, searchQuery) => {
      // console.log(id);
      return dispatch => {
        dispatch({ type: "EVENT_DETAILS_FETCH_PENDING" });
    
        const apiUrl = `https://api.seatgeek.com/2/events?performers.slug=${searchQuery}&client_id=MjExMjk0NjV8MTY0MTA5MDU5OC40MTYzNzQy`;
        axios.get(apiUrl).then(res => {
          // console.log(res.data);
          dispatch({ type: "EVENT_DETAILS_FETCH_SUCCESS", payload: res.data });
        });
      };
    };


    // export const getSearchResults = (searchQuery) => {
    //   return dispatch => fetch(`https://api.seatgeek.com/2/events?performers.slug=${searchQuery}&client_id=MjExMjk0NjV8MTY0MTA5MDU5OC40MTYzNzQy`).then(res => res.json()).then(search => {dispatch({type: "SEARCH_RESULTS", payload: search})}).catch(error => {
    //       console.error('Error:', error);
    //     });
        
    //     }


//     export const getSearchResults = (searchQuery) => {
//   return dispatch => fetch(`https://api.seatgeek.com/2/events?performers.slug=${searchQuery}&client_id=MjExMjk0NjV8MTY0MTA5MDU5OC40MTYzNzQy`)
//   .then(res => {
//     return res.json()})
//   .then(
//     (json) => {
    
//     json.events.map(event => {
//     return { 
//       performer_name: event.performers[0].name,

//      }
//   }
//   )
// }).then(search_results => {dispatch({type: "SEARCH_RESULTS", payload: search_results})}).catch(error => {
//   console.error('Error:', error);
// });

// }


//  .then(
//     (json) => {
//     json.events.map(event => 
//       {return {
//       name: event.venue.name,
//       address: event.venue.extended_address,
//       performer_name: event.performers[0].name
//       } 
      
//     } 
     
// before dispatch then
// .then(res => {return res.json()})

  // }).then(events => 
  //   dispatch({type: "SEARCH_RESULTS", payload: events})
  // )};

//   export const getSearchResults = (searchQuery) => {
//   return dispatch => fetch(`https://api.seatgeek.com/2/events?performers.slug=${searchQuery}&client_id=MjExMjk0NjV8MTY0MTA5MDU5OC40MTYzNzQy`)
//   .then(res => res.json()).then(events => dispatch({type: "SEARCH_RESULTS", payload: events}))
// };


      // (performer_name: event.performers[0].name),
      // (performer_image: event.performers[0].image),
      // (venue_name: event.venue.name),
      // (venue_address: event.venue.extended_address),
      // (datetime: event.datetime_local)


//   dispatch({type: "SEARCH_RESULTS", payload: json.events})
// } )}
  
//   .then(events => dispatch({type: "SEARCH_RESULTS", payload: events}))
// };

// export const getSearchResults = (searchQuery) => {
//   return dispatch => fetch(`https://api.seatgeek.com/2/events?performers.slug=${searchQuery}&client_id=MjExMjk0NjV8MTY0MTA5MDU5OC40MTYzNzQy`)
//   .then(res => res.json())
//   .then(
//     (json) => {
//       json.events.map(event => 
//               venue.name,
//               venue.extended_address,
//               performers[0].name,
//               performers[0].image,
//               datetime_local,
//       )

//         //       // (performer_name: event.performers[0].name),
//         //       // (performer_image: event.performers[0].image),
//         //       // (venue_name: event.venue.name),
//         //       // (venue_address: event.venue.extended_address),
//         //       // (datetime: event.datetime_local)

//     }
//   )
//   .then(events => dispatch({type: "SEARCH_RESULTS", payload: events}))
// };

// export const getSearchResults = (searchQuery) => {
//   return dispatch => fetch(`https://api.seatgeek.com/2/events?performers.slug=${searchQuery}&client_id=MjExMjk0NjV8MTY0MTA5MDU5OC40MTYzNzQy`)
//   .then(res => res.json()).then(events => dispatch({type: "SEARCH_RESULTS", payload: events}))
// };

// event.venue.name
// event.venue.extended_address
// event.performers[0].name
// event.performers[0].image
// event.datetime_local





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
