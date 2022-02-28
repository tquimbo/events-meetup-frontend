import {useEffect} from "react"
import {getEvents} from '../redux/actionCreators'
import { connect } from 'react-redux'
import { Routes, Route, Outlet } from "react-router-dom";
import EventCard from "../components/EventCard"


function EventIndex({getEvents, events}){

  useEffect(getEvents, [getEvents])

      return <div className="cards">
    {events.map(event => <EventCard {...event} key={event.id}/>)}
    

  </div>



}

debugger 

  const mapStateToProps = (state) => {
  return {events: state.events}
}


export default connect(mapStateToProps, { getEvents })(EventIndex)