import {useEffect} from "react"
import {getEvents} from '../redux/actionCreators'
import { connect } from 'react-redux'
import { Routes, Route, Outlet } from "react-router-dom";
import EventCard from "../components/EventCard"

export default function EventCardSearch({events, query}){

  if (!query) {
    return events;
}

  
return events.filter((event) => {
  const eventName = event.name.toLowerCase();
  return eventName.includes(query);
});
};




//   return (<div className="cards">
 
// <Link to={`/events/${event.id}`}><h3>{event.performer_name}</h3></Link> 

// {/* <h3>{performer_name}</h3> */}
//     <p>{event.venue_name}</p>
//     <p>{event.venue_address}</p>
//     <p>{event.datetime}</p>
//   </div>);


