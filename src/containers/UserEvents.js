import {useEffect, useState} from "react"
// import {submitLogin, submitSignup, getEvent, addEvent, getUsers, getUser} from '../redux/actionCreators'
import {submitLogin, submitSignup, getEvent, addEvent, getEvents, getUser} from '../redux/actionCreators.ts'
import { connect } from 'react-redux'
import { Routes, Route, Outlet } from "react-router-dom";
// import EventCard from "../components/EventCard"
import UserEventCard from "../components/UserEventCard"
import EventCard from "../components/UserEventCard"
import MyProfile from "../components/MyProfile"
import Login from "../components/Login";
import Signup from "../components/Signup";
import EventShow from "../components/EventShow";


function UserEvents(props) {
  const otherUser = props.otherUser;
  const userEvents = props.otherUser.userEvents;
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [showUpcoming, setShowUpcoming] = useState(true);


  useEffect(() => {
    getUser(otherUser.id);
  }, [getUser, otherUser.id]);

  useEffect(() => {
    if (otherUser && otherUser.userEvents) {
      const currentTime = new Date();

      const upcoming = props.otherUser.userEvents.filter(event => new Date(event.formatted_datetime) >= currentTime);
      const past = props.otherUser.userEvents.filter(event => new Date(event.formatted_datetime) < currentTime);

      setUpcomingEvents(upcoming);
      setPastEvents(past);
    }
  }, [otherUser]);

  

  return (
    <div className="user_events">

<h1>Upcoming Events</h1>

<ul style={{ listStyleType: 'none' }} >
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map(user_event => (
            <li key={user_event.id}>
              <UserEventCard {...user_event}  />
            </li>
          ))
        ) : (
          <li>No upcoming events</li>
        )}
      </ul>

<h1>Past Events</h1>




<ul style={{ listStyleType: 'none' }} >
        {pastEvents.length > 0 ? (
          pastEvents.map(user_event => (
            <li key={user_event.id}>
              <UserEventCard {...user_event} />
            </li>
          ))
        ) : (
          <li>No past events</li>
        )}
      </ul>


    </div>
  );
}

const mapStateToProps = (state) => {
  return { otherUser: state.otherUser, userEvents: state.otherUser.userEvents };
};

export default connect(mapStateToProps, { getUser })(UserEvents);




// import { useEffect, useState } from "react";
// import { connect } from "react-redux";
// // import { getUser } from "../redux/actionCreators";
// import UserEventCard from "../components/UserEventCard";
// import {submitLogin, submitSignup, getEvent, addEvent, getEvents, getUser} from '../redux/actionCreators.ts'

// function UserEvents(props) {
//   const otherUser = props.otherUser;
//   const userEvents = props.otherUser.userEvents;
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [pastEvents, setPastEvents] = useState([]);


//   useEffect(() => {
//     getUser(otherUser.id);
//   }, [getUser, otherUser.id]);


//   // useEffect(() => {
//   //   if (otherUser && otherUser.id) {
//   //     props.getUser(otherUser.id);
//   //   }
//   // }, [otherUser, props.getUser]);

//   useEffect(() => {
//     if (otherUser && otherUser.userEvents) {
//       const currentTime = new Date();

//       const upcoming = props.otherUser.userEvents.filter(event => new Date(event.start_time) >= currentTime);
//       const past = props.otherUser.userEvents.filter(event => new Date(event.start_time) < currentTime);

//       setUpcomingEvents(upcoming);
//       setPastEvents(past);
//     }
//   }, [otherUser]);

//   return (
//     <div className="user_events">
//       <h1>Upcoming Events</h1>
//       <ul>
//         {upcomingEvents.length > 0 ? (
//           upcomingEvents.map(user_event => (
//             <li key={user_event.id}>
//               <UserEventCard {...user_event} />
//             </li>
//           ))
//         ) : (
//           <li>No upcoming events</li>
//         )}
//       </ul>

//       <h1>Past Events</h1>
//       <ul>
//         {pastEvents.length > 0 ? (
//           pastEvents.map(user_event => (
//             <li key={user_event.id}>
//               <UserEventCard {...user_event} />
//             </li>
//           ))
//         ) : (
//           <li>No past events</li>
//         )}
//       </ul>

//       <style jsx>{`
//         .user_events h1 {
//           margin-top: 20px;
//         }
//         .user_events ul {
//           list-style: none;
//           padding: 0;
//         }
//         .user_events li {
//           margin-bottom: 10px;
//         }
//       `}</style>
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   otherUser: state.otherUser,
//   userEvents: state.otherUser.userEvents,
// });

// export default connect(mapStateToProps, { getUser })(UserEvents);