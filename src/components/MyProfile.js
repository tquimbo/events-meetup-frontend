import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
// import { getEvent } from '../redux/actionCreators';
import { Link, Outlet} from 'react-router';
import { useEffect } from 'react';
import Login from "../components/Login";
import Signup from "../components/Signup";
import EventCard from "../components/EventCard";
import AddEvent from "../components/EventCard";
import { submitSignup, submitLogin, addEvent, getEvent } from '../redux/actionCreators';
import UserEvents from "../containers/UserEvents";


function MyProfile(props){


    // useEffect(() => {
    //     submitSignup(localStorage.currentUser)
    //     submitLogin(localStorage.currentUser)
    // }, [])

    useEffect(submitLogin, [submitLogin], submitSignup, [submitSignup] )
    
    return (<div className="myprofile">

    <h1> Hi {props.user.first_name} </h1>
 
    <h3> My Events </h3>
    <UserEvents />
    
   </div>
    )
};

const mapStateToProps = (state) => {
    return {  user: state.user
        // user_events: state.user_events
}
}
// const mapStateToProps = state => {
//     return {
//         user: state.user,
//         // selectedEvent: state.selectedEvent
//     }
        
// }
// const mapStateToProps = (state) => {
//     return {
//        ...state.user, 
//         ...state.selectedEvent
//     }
        
// }




export default connect(mapStateToProps, { submitSignup, submitLogin, addEvent })(MyProfile)