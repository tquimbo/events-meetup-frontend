
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link, Outlet} from 'react-router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import Login from "../components/Login";
import Signup from "../components/Signup";
import EventCard from "../components/EventCard";
import { submitSignup, submitLogin, getEvent, getUser, addEvent } from '../redux/actionCreators.ts';
import EventShow from "../components/EventShow";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import MyProfile from "../components/MyProfile";




function AddEvent(props){


  let navigate = useNavigate();

  
    const user = props.user
    const event = props.event
   
    const userID = props.user.id
    const username = props.user.username
    
    

    const handleClick = (e) => {
        e.preventDefault()
        props.addEvent({ user, event } )
      }

    // const handleAttend = async (e) => {
    //   e.preventDefault();
  
    //   // Your logic for updating the attendees in your backend
    //   // Get the updated event data from the backend
    //   // For example, if your API returns the updated event:
    //   // const updatedEvent = await api.updateAttendeesAndGetEvent(event.id, user);
  
    //   // Dispatch the addEvent action to update user events in the Redux store
    //   props.addEvent({ user, event });
  
    //   // Dispatch the getEvent action to update the event data in the Redux store
    //   // props.getEvent(eventID);
    // };

    

  
    return (<div className="addEvent">


            <button onClick={handleClick}>
            Attending
            </button>            
    
   </div>
    )
};



const mapStateToProps = (state) => {
    return {
       user: state.user, 
       event: state.event,
       userEvents: state.user.userEvents
    }
        
}


// export default connect(null, { submitSignup, submitLogin, getEvent, addEvent })(AddEvent)
export default connect(mapStateToProps, { submitSignup, submitLogin, getEvent, addEvent })(AddEvent)


