
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link, Outlet} from 'react-router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import Login from "../components/Login";
import Signup from "../components/Signup";
import EventCard from "../components/EventCard";
import { submitSignup, submitLogin, addEvent, getEvent, getUser } from '../redux/actionCreators.ts';
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


