import {useEffect} from "react"
// import {submitLogin, submitSignup, getEvent, addEvent, getUsers, getUser} from '../redux/actionCreators'
import {submitLogin, submitSignup, getEvent, addEvent, getEvents, getUser} from '../redux/actionCreators.ts'
import { connect } from 'react-redux'
import { Routes, Route, Outlet } from "react-router-dom";
// import EventCard from "../components/EventCard"
import UserEventCard from "../components/UserEventCard"
import MyProfile from "../components/MyProfile"
import Login from "../components/Login";
import Signup from "../components/Signup";
import EventShow from "../components/EventShow";
import UserEvents from "../containers/UserEvents";

function EventUsers({ userEvents, getUser, user, users }) {
    // ...
    const attendees = userEvents && users ? userEvents.map((userEvent) => {
        const attendingUser = users.find((user) => user.id === userEvent.userId);
        return { ...attendingUser, eventId: userEvent.eventId };
      }) : [];
    
      return (
        <div className="event_users">
          {attendees.map((user) => (
            <UserEventCard {...user} key={user.id} />
          ))}
        </div>
      );
  }
  
  const mapStateToProps = (state) => {
    return { user: state.user, users: state.users, userEvents: state.userEvents };
  };
  
  export default connect(mapStateToProps, { getUser })(EventUsers);

// function EventsUsers({ userEvents, getUser, user, users }) {
//     // ...
//     const attendees = userEvents.map((userEvent) => {
//       const attendingUser = users.find((user) => user.id === userEvent.userId);
//       return { ...attendingUser, eventId: userEvent.eventId };
//     });
  
//     return (
//       <div className="event_users">
//         {attendees.map((user) => (
//           <UserEventCard {...user} key={user.id} />
//         ))}
//       </div>
//     );
//   }
  
//   const mapStateToProps = (state) => {
//     return { user: state.user, users: state.users };
//   };
  
//   export default connect(mapStateToProps, { getUser })(EventsUsers);

// function EventsUsers(props){

//     // useEffect(addEvent, [addEvent])

//     const user = props.user
//     const event = props.event
//     const userID = props.user.id

//     useEffect(() => {
//       getUser(userID)
//     }, [getUser, userID])
  


//       return <div className="event_users">
//     {props.users.map(user => <UserEventCard {...user} key={user.id}/>)}
  
//   </div>



// }

// const mapStateToProps = (state) => {
//   return {user: state.user }
//   }

//   export default connect(mapStateToProps, { getUser })(EventsUsers);

//   export default connect(mapStateToProps, { getUser })
// import {useEffect} from "react"
// import {getEvents} from '../redux/actionCreators'
// import { connect } from 'react-redux'
// import { Routes, Route, Outlet } from "react-router-dom";
// import EventCard from "../components/EventCard"


// function EventUsers(props){

//   useEffect(submitLogin, [submitLogin], submitSignup, [submitSignup], getEvent, [getEvent] )


//       return <div className="user_events">
//     {event_users.map(users => <UserCard {...user} key={user.id}/>)}
//     <Outlet />
//   </div>
// }

//   const mapStateToProps = (state) => {
//   return {event_users: state.event_users}
//   }


// export default connect(mapStateToProps, { submitLogin, submitSignup, getEvent, addEvent })(EventUsers)

// function EventUsers({ userEvents, getUser, user, users }) {
    
//     return (
//       <div className="event_users">
//         {users.map((user) => (
//           <UserEventCard {...user} key={user.id} />
//         ))}
//       </div>
//     );
//   }
