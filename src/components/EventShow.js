import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEvent } from '../redux/actionCreators';
import { Link, Outlet} from 'react-router';
import { useEffect } from 'react';
import EventCard from "../components/EventCard";
import AddEvent from "../components/AddEvent";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { submitSignup, submitLogin } from '../redux/actionCreators';

function EventShow({getEvent, performerName, performerImage, venueName, venueAddress, datetime, attendance_status, username, id, addEvent, userId}){

 
   
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

  </div>

 
)};





const mapStateToProps = (state) => {
  return {...state.event,
    ...state.user}
    }
    
// export default EventShow

export default connect(mapStateToProps, {getEvent })(EventShow);