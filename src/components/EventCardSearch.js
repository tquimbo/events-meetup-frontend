// import {useEffect} from "react"
// import {getEvents} from '../redux/actionCreators.ts'
// import { connect } from 'react-redux'
// import { Routes, Route } from "react-router-dom";
// import EventCard from "../components/EventCard"

// import { Link, Outlet } from 'react-router-dom'


// export default function EventCardSearch({id, performer_name, venue_name, venue_address, datetime, type, events, search_results }){
  


//   return (<div className="search_cards">
// {
// search_results.events.map(event => {
//     return { 
//       performer_name: event.performers[0].name,
//       performer_image: event.performers[0].image,
//       venue_name: event.venue.name,
//       venue_address: event.venue.extended_address,
//       datetime: event.datetime_local
//     }})}
// </div>
//   )
// }

//   return (<div className="cards">
 
// <Link to={`/events/${event.id}`}><h3>{event.performer_name}</h3></Link> 

// {/* <h3>{performer_name}</h3> */}
//     <p>{event.venue_name}</p>
//     <p>{event.venue_address}</p>
//     <p>{event.datetime}</p>
//   </div>);

import {useEffect} from "react"
import {getEvents} from '../redux/actionCreators.ts'
import { connect } from 'react-redux'
import { Routes, Route } from "react-router-dom";
import EventCard from "../components/EventCard"

import { Link, Outlet } from 'react-router-dom'


export default function EventCardSearch({id, performer_name, venue_name, venue_address, datetime, type, events, search_results }){
  


  return (<div className="search_cards">

  {/* <p>{type}</p> */}
  <p> Hi </p>

</div>
  );
}

const mapStateToProps = (state) => {
  return {search_results: state.search_results,
    events: state.search_results.events}
}




{/* search_results.events.map(event => {
    return { 
      <h1> {event.performers[0].name}   </h1> 
      performer_image: event.performers[0].image,
      venue_name: event.venue.name,
      venue_address: event.venue.extended_address,
      datetime: event.datetime_local
    }})} */}