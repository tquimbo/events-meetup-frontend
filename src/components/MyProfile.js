import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
//import { getEvent } from '../redux/actionCreators.ts';
import { Link, Outlet} from 'react-router';
import { useEffect } from 'react';
import Login from "../components/Login";
import Signup from "../components/Signup";
import EventCard from "../components/EventCard";
import UserEventCard from "../components/EventCard";
import UserEvents from '../containers/UserEvents';
import EventIndex from '../containers/EventIndex';
import AddEvent from "../components/EventCard";
// import { submitSignup, submitLogin, addEvent, getEvent, getUsers, getUser } from '../redux/actionCreators';
import { submitSignup, submitLogin, addEvent, getEvent, getUser, fetchUser  } from '../redux/actionCreators.ts';



function MyProfile(props){

  // const user = props.user
  const userID = props.user.id

  // const userID = useParams().userID;

  // useEffect(() => {
  //   getUser(userID)
  // }, [getUser, userID])

  // useEffect(fetchUser, [fetchUser])


    // useEffect(() => {
    //     submitSignup(localStorage.currentUser)
    //     submitLogin(localStorage.currentUser)
    // }, [])

    // useEffect(submitLogin, [submitLogin], submitSignup, [submitSignup], addEvent, [addEvent], getUsers, [getUsers], getUser, [getUser])

    // useEffect(submitLogin, [submitLogin], submitSignup, [submitSignup], addEvent, [addEvent], getUser, [getUser] )
    
    
    return (<div className="myprofile">

      

    <h1> Hi {props.user.firstName} {props.user.lastName} </h1>
 

    

    <h3> My Events </h3>

    <UserEvents/>

    {/* {props.user.userEvents.map(user_event => <UserEventCard {...user_event} key={user_event.id}/>)}
  
   */}

    {/* <p> {props.user.userEvents} </p> */}

    {/* <p> {props.user.userEvents} </p> */}
    {/* <UserEvents /> */}

    {/* <UserEvents /> */}
    
    {/* <EventIndex /> */}

   </div>
   
    )

    
};

// const mapStateToProps = (state) => {
//     return {  user: state.user}
// }

const mapStateToProps = (state) => {
    return {user: state.user }
    }
  



export default connect(mapStateToProps, { submitSignup, submitLogin, addEvent, getUser })(MyProfile)