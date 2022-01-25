import {useEffect} from "react"
import {getEvents} from '../redux/actionCreators'
import { connect } from 'react-redux'
import { Routes, Route, Outlet } from "react-router-dom";
import EventCard from "../components/EventCard"

export default function EventCardSearch({event}){
  return (
    <div>
      <h1>{event.name}</h1>

    </div>
  );
}


//   return (<div className="cards">
 
// <Link to={`/events/${event.id}`}><h3>{event.performer_name}</h3></Link> 

// {/* <h3>{performer_name}</h3> */}
//     <p>{event.venue_name}</p>
//     <p>{event.venue_address}</p>
//     <p>{event.datetime}</p>
//   </div>);


