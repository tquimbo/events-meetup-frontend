import React, { useState } from "react";
import { Modal, Button, ListGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Attendees = ({ event, users }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

//   const handleAttend = () => {
//     // Your logic for updating the attendees in your backend
//   };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Attendees: {event.users.length}
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Attendees</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {users.map((user) => (
              <ListGroup.Item key={user.id}>
                {/* <Image
                  src={user.profile_picture}
                  roundedCircle
                  width="30"
                  height="30"
                  className="mr-2"
                /> */}
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
          <Button variant="primary" onClick={handleAttend}>
            Attend
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Attendees;