import {useEffect} from "react"
import {getEvents} from '../redux/actionCreators'
import { connect } from 'react-redux'
import { Routes, Route, Outlet } from "react-router-dom";
import EventCard from "../components/EventCard"


function EventUsers(props){

  useEffect(submitLogin, [submitLogin], submitSignup, [submitSignup], getEvent, [getEvent] )


      return <div className="user_events">
    {event_users.map(users => <UserCard {...user} key={user.id}/>)}
    <Outlet />
  </div>
}

  const mapStateToProps = (state) => {
  return {event_users: state.event_users}
  }


export default connect(mapStateToProps, { submitLogin, submitSignup, getEvent, addEvent })(EventUsers)