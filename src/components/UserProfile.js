import React, { useState } from "react";
import { Modal, Button, ListGroup, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getUser } from '../redux/actionCreators.ts';
import { ActionCableConsumer } from 'react-actioncable-provider';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link, Outlet} from 'react-router';
import { useEffect } from 'react';
import UserEvents from '../containers/UserEvents';
import { useSelector } from 'react-redux';




const UserProfile = (props) => {

const userId = useParams().userId;

const loggedInUser = useSelector((state) => state.user);


useEffect(() => {
    props.getUser(userId)
  }, [props.getUser, userId])

  return (<div className="user">

<h1> {props.user.firstName} {props.user.lastName}'s Events </h1>


 
<UserEvents/>
{/* <UserEvents user={props.user} loggedInUser={loggedInUser} />


     */}

 

   

  </div>

 
)};


const mapStateToProps = (state) => {
  return {
     user: state.user, 
     users: state.users, 
     event: state.event,
     events: state.events,
     userEvents: state.user.userEvents
  }
      
}

export default connect(mapStateToProps, { getUser })(UserProfile)


