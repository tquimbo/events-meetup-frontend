// import {useEffect} from "react"
// import {submitLogin, submitSignup, getEvent, addEvent} from '../redux/actionCreators'
// import { connect } from 'react-redux'
// import { Routes, Route, Outlet } from "react-router-dom";
// import EventCard from "../components/EventCard"
// import MyProfile from "../components/EventCard"
// import Login from "../components/Login";
// import Signup from "../components/Signup";
// import EventShow from "../components/EventCard";


// function UserEvents(props){


//       return <div className="user_events">
//     {props.user_events.map(user_event => <EventCard {...user_event} key={user_event.id}/>)}
//     <Outlet />
//   </div>
// }

//   const mapStateToProps = (state) => {
//   return {user_events: state.user_events}
//   }


//   export default connect(mapStateToProps, { getEvent, addEvent })(UserEvents)