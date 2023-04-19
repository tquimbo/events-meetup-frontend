import {useEffect} from "react"
import {getEvents} from '../redux/actionCreators.ts'
import { connect } from 'react-redux'
import { Routes, Route, Outlet } from "react-router-dom";
import EventCard from "../components/EventCard"


function EventIndex({getEvents, events}){

  useEffect(getEvents, [getEvents])

      return <div className="cards">
    {events.map(event => <EventCard {...event} key={event.id}/>)}
    
   <p> Hi </p>
   
  </div>

}

  const mapStateToProps = (state) => {
  return {events: state.events}
}


export default connect(mapStateToProps, { getEvents })(EventIndex)