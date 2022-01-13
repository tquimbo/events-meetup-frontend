import {useEffect} from "react"
import {getEvents} from '../redux/actionCreators'
import { connect } from 'react-redux'
import EventCard from "../components/EventCard"

export default function EventSearchResults({ event }) {
  
    return <div className="cards">
    {events.map(event => <EventCard {...event} key={event.id}/>)}
   
  }
