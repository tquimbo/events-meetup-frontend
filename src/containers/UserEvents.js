import {useEffect} from "react"
import {getEvents} from '../redux/actionCreators'
import { connect } from 'react-redux'
import { Routes, Route, Outlet } from "react-router-dom";
import EventCard from "../components/EventCard"


function UserEvents(props){

  useEffect(submitLogin, [submitLogin], submitSignup, [submitSignup], getEvent, [getEvent] )


      return <div className="user_events">
    {user_events.map(event => <EventCard {...event} key={event.id}/>)}
    <Outlet />
  </div>
}

  const mapStateToProps = (state) => {
  return {user_events: state.user_events}
  }


export default connect(mapStateToProps, { getEvents })(UserEvents)