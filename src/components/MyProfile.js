import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEvent } from '../redux/actionCreators';
import { Link, Outlet} from 'react-router';
import { useEffect } from 'react';
import Login from "../components/Login";
import Signup from "../components/Signup";
import EventCard from "../components/EventCard";
import { submitSignup, submitLogin } from '../redux/actionCreators';




function MyProfile(props){

    // useEffect(() => {
    //     submitSignup(localStorage.currentUser)
    //     submitLogin(localStorage.currentUser)
    // }, [])

    useEffect(submitLogin, [submitLogin], submitSignup, [submitSignup] )
    
    return (<div className="myprofile">

    <h1> Hi {props.first_name} </h1>
    <h3> My Events </h3>
    
   </div>
    )
};

const mapStateToProps = (state) => {
    return {...state.user}
}


export default connect(mapStateToProps, { submitSignup, submitLogin })(MyProfile)