import {useEffect} from "react"
import {getEvents} from '../redux/actionCreators'
import { connect } from 'react-redux'
import { Routes, Route } from "react-router-dom";
import EventCard from "../components/EventCard"

import { Link, Outlet } from 'react-router-dom'


export default function EventCardSearch({id, performer_name, venue_name, venue_address, datetime, type }){
  


  return (<div className="search_cards">
 
{/* <Link to={`/events/${id}`}><h3>{performer_name}</h3></Link>  */}

<h3>{type}</h3>

{/* <h3>{performer_name}</h3> */}
    {/* <p>{venue_name}</p>
    <p>{venue_address}</p> */}
    {/* <p>{datetime}</p> */}
  </div>);

}


//   return (<div className="cards">
 
// <Link to={`/events/${event.id}`}><h3>{event.performer_name}</h3></Link> 

// {/* <h3>{performer_name}</h3> */}
//     <p>{event.venue_name}</p>
//     <p>{event.venue_address}</p>
//     <p>{event.datetime}</p>
//   </div>);


