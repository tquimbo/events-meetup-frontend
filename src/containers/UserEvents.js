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

//   useEffect(submitLogin, [submitLogin], submitSignup, [submitSignup], getEvent, [getEvent], addEvent, [addEvent]  )


//       return <div className="user_events">
//     {user_events.map(event => <EventCard {...event} key={event.id}/>)}
//     <Outlet />
//   </div>
// }

//   const mapStateToProps = (state) => {
//   return {user_events: state.user_events}
//   }


//   export default connect(mapStateToProps, { submitLogin, submitSignup, getEvent, addEvent })(UserEvents)