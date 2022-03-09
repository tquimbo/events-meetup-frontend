import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
// import { getEvent } from '../redux/actionCreators';
import { Link, Outlet} from 'react-router';
import { useEffect } from 'react';
import Login from "../components/Login";
import Signup from "../components/Signup";
import EventCard from "../components/EventCard";
import UserEvents from '../containers/UserEvents';
import EventIndex from '../containers/EventIndex';
import AddEvent from "../components/EventCard";
import { submitSignup, submitLogin, addEvent, getEvent } from '../redux/actionCreators';


function MyProfile(props){


    // useEffect(() => {
    //     submitSignup(localStorage.currentUser)
    //     submitLogin(localStorage.currentUser)
    // }, [])

    useEffect(submitLogin, [submitLogin], submitSignup, [submitSignup], addEvent, [addEvent])
    
    return (<div className="myprofile">

    <h1> Hi {props.user.firstName} {props.user.lastName} </h1>
 
    <h3> My Events </h3>

    {/* <p> {props.user.userEvents} </p> */}

    {/* <p> {props.user.userEvents} </p> */}
    <UserEvents />

    {/* <UserEvents />
     */}
    {/* <EventIndex /> */}

   </div>
   
    )

    
};

// const mapStateToProps = (state) => {
//     return {  user: state.user}
// }

const mapStateToProps = (state) => {
    return {user: state.user,
      userEvents: state.user.userEvents }
    }
  



export default connect(mapStateToProps, { submitSignup, submitLogin, addEvent })(MyProfile)