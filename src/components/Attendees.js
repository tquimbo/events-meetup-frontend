import React, { useState } from "react";
import { Modal, Button, ListGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getEvent } from '../redux/actionCreators.ts';
import { ActionCableConsumer } from 'react-actioncable-provider';
import { connect } from 'react-redux';
import { useEffect } from 'react';


const Attendees = (props) => {


  // const event = props.event
  const { event, userEvents } = props;
 
  // const [showModal, setShowModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [attendees, setAttendees] = useState(event.users || []);


  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    setAttendees(event.users || []);
  }, [event.users]);

  useEffect(() => {
    setAttendees(event.users || []);
  }, [userEvents]);
  

//   const handleAttend = () => {
//     // Your logic for updating the attendees in your backend
//   };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>

        Attendees: {event.users ? event.users.length : 0}
      </Button> */}
      <Button variant="primary" onClick={handleShow}>
  Attendees: {attendees ? attendees.length : 0}
</Button>

      <Modal show={showModal} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Attendees</Modal.Title>
</Modal.Header>
<Modal.Body>
  <ListGroup>
  {attendees && attendees.map((user) => (

      <ListGroup.Item key={user.id}>
       {/* <Image
          src={user.profile_picture}
          roundedCircle
          width="30"
          height="30"
          className="mr-2"
        />  */}
   <Link to={`/users/${user.id}`} onClick={handleClose}>
         {user.first_name} {user.last_name}
      </Link>
      </ListGroup.Item>
   ))}
  </ListGroup>
 </Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>

</Modal.Footer>
</Modal> 

    </>
  );
};




const mapStateToProps = (state) => {
  return {
     user: state.user, 
     users: state.users,
     event: state.event,
     events: state.events,
     userEvents: state.user.userEvents,
     attendees: state.attendees
  }
      
}

export default connect(mapStateToProps, { getEvent })(Attendees)


