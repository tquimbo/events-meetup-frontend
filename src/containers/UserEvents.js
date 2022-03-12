import {useEffect} from "react"
import {submitLogin, submitSignup, getEvent, addEvent, getUsers, getUser} from '../redux/actionCreators'
import { connect } from 'react-redux'
import { Routes, Route, Outlet } from "react-router-dom";
// import EventCard from "../components/EventCard"
import UserEventCard from "../components/UserEventCard"
import MyProfile from "../components/MyProfile"
import Login from "../components/Login";
import Signup from "../components/Signup";
import EventShow from "../components/EventShow";


function UserEvents(props){

    // useEffect(addEvent, [addEvent])
    useEffect(submitLogin, [submitLogin], submitSignup, [submitSignup], addEvent, [addEvent], getUsers, [getUsers], getUser, [getUser])



      return <div className="user_events">
    {props.user.userEvents.map(user_event => <UserEventCard {...user_event} key={user_event.id}/>)}
  
  </div>



}

  const mapStateToProps = (state) => {
  return {user: state.user,
user_event: state.user_event,
user_events: state.user_events  }
  }


  export default connect(mapStateToProps, { getEvent, addEvent, getUsers, getUser })(UserEvents)