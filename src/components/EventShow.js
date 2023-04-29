import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEvent } from '../redux/actionCreators.ts';
import { Link, Outlet} from 'react-router';
import { useEffect } from 'react';
import EventCard from "../components/EventCard";
import AddEvent from "../components/AddEvent";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Attendees from "../components/Attendees";
import EventUsers from "../containers/EventUsers";
import { submitSignup, submitLogin } from '../redux/actionCreators.ts';


function EventShow({getEvent, userEvents, performerName, performerImage, venueName, venueAddress, datetime, attendance_status, username, id, addEvent, userId, users}){

 
   
    const eventId = useParams().eventId;


    useEffect(() => {
        getEvent(eventId)
      }, [getEvent, eventId])

    //    useEffect(getEvent, [getEvent])
    // {eventId}
   
return (<div className="show">

    
   <h3>{performerName}</h3>
   {/* <p> {params.eventId} </p> */}
    <img src={performerImage} alt={venueName}/>
    <p>{venueName}</p>
    <p>{venueAddress}</p>
    <p>{attendance_status}</p>



   <AddEvent/>

   

   {/* <EventUsers/> */}


   <Attendees/>




   
    {/* <EventUsers /> */}
    {/* <p> {users.first_name}</p> */}

   {/* <p> Attendees </p> */}
  {/* <EventUsers /> */}

  </div>

 
)};





const mapStateToProps = (state) => {
  return {...state.event,
    ...state.user}
    }
    
// export default EventShow

export default connect(mapStateToProps, {getEvent })(EventShow);