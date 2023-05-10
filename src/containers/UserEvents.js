import {useEffect} from "react"
// import {submitLogin, submitSignup, getEvent, addEvent, getUsers, getUser} from '../redux/actionCreators'
import {submitLogin, submitSignup, getEvent, addEvent, getEvents, getUser} from '../redux/actionCreators.ts'
import { connect } from 'react-redux'
import { Routes, Route, Outlet } from "react-router-dom";
// import EventCard from "../components/EventCard"
import UserEventCard from "../components/UserEventCard"
import EventCard from "../components/UserEventCard"
import MyProfile from "../components/MyProfile"
import Login from "../components/Login";
import Signup from "../components/Signup";
import EventShow from "../components/EventShow";


// function UserEvents(props){

//     // useEffect(addEvent, [addEvent])

//     const user = props.user
//     const event = props.event
//     const eventID = props.event.id
//     const userID = props.user.id
//     const userEvents = props.user.userEvents

//     useEffect(() => {
//       getUser(userID)
//     }, [getUser, userID])
  


//       return <div className="user_events">
//     {/* {props.user.userEvents.map(user_event => <UserEventCard {...user_event} key={user_event.id}/>)} */}
//     {props.user.userEvents.map(user_event => <EventCard {...user_event} key={user_event.id}/>)}
  
//   </div>



// }

// const mapStateToProps = (state) => {
//   return {user: state.user,
//     userEvents: state.user.userEvents }
//   }



//   export default connect(mapStateToProps, { getUser })(UserEvents)



function UserEvents(props){

    // useEffect(addEvent, [addEvent])

    const user = props.user
    const event = props.event
    const userID = props.user.id
    
    
    const userEvents = props.user.userEvents

    useEffect(() => {
      getUser(userID)
    }, [getUser, userID])
  


      return <div className="user_events">
    {props.user.userEvents.map(user_event => <UserEventCard {...user_event} key={user_event.id}/>)}
  
  </div>



}

const mapStateToProps = (state) => {
  return {user: state.user,
    userEvents: state.user.userEvents }
  }



  export default connect(mapStateToProps, { getUser })(UserEvents)