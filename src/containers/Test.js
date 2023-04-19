import {useEffect} from "react"
import {getEvents} from '../redux/actionCreators.ts'
import { connect } from 'react-redux'
import { Routes, Route, Outlet } from "react-router-dom";
import EventCard from "../components/EventCard"


function Test({getEvents, events}){

  useEffect(getEvents, [getEvents])

      return <div className="test">
    
   <p> Hi </p>
   
  </div>

}

  const mapStateToProps = (state) => {
  return {events: state.events}
}


export default connect(mapStateToProps, { getEvents })(Test)