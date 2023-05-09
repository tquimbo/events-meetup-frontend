
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



function AddEvent(props) {

  let navigate = useNavigate();

  const user = props.user;
  const event = props.event;
  const users = props.users;
   
  const userID = props.user.id;
  const username = props.user.username;
    
  // const isEventAlreadyAdded = () => {
  //   return event.users.some((u) => u.id === user.id);
  // };

  // const isEventAlreadyAdded = () => {
  //   return event.users.some((u) => u.username === user.username);
  // };
  const isEventAlreadyAdded = () => {
    return event && event.users && event.users.some((u) => u.username === user.username);
  };

  const [isAttending, setIsAttending] = useState(isEventAlreadyAdded());

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   if (!isEventAlreadyAdded()) {
  //     props.addEvent({ user, event });
  //     setIsAttending(true);
  //   } else {
  //     alert("You have already added this event.");
  //   }
  // };

  const handleClick = (e) => {
    e.preventDefault();
    if (!isEventAlreadyAdded()) {
      props.addEvent({ user, event });
      setIsAttending(true);
    } 
  };


    // const handleClick = (e) => {
    //    e.preventDefault()
    //     props.addEvent({ user, event } )
    //  }


  return (
    <div className="addEvent">
      <button onClick={handleClick}>{isAttending ? "Attending" : "Add Event"}</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user, 
    users: state.users, 
    event: state.event,
  }
};

export default connect(mapStateToProps, { getEvent, addEvent })(AddEvent);


// function AddEvent(props) {

//   let navigate = useNavigate();

//   const user = props.user;
//   const event = props.event;
   
//   const userID = props.user.id;
//   const username = props.user.username;
    
//   // const isEventAlreadyAdded = () => {
//   //   return event.users.some((u) => u.id === user.id);
//   // };

//   // const isEventAlreadyAdded = () => {
//   //   return event.users.some((u) => u.id === user.id);
//   // };
//   const isEventAlreadyAdded = () => {
//     return props.userEvents.some((userEvent) => userEvent.event_id === event.id);
//   };

//   const [isAttending, setIsAttending] = useState(isEventAlreadyAdded());

//   // const handleClick = (e) => {
//   //   e.preventDefault();
//   //   if (!isEventAlreadyAdded()) {
//   //     props.addEvent({ user, event });
//   //     setIsAttending(true);
//   //   } else {
//   //     alert("You have already added this event.");
//   //   }
//   // };


//   const handleClick = (e) => {
//     e.preventDefault();
//     if (!isEventAlreadyAdded()) {
//       props.addEvent({ user, event });
//       setIsAttending(true);
//     } 
//   };


//     // const handleClick = (e) => {
//     //     e.preventDefault()
//     //     props.addEvent({ user, event } )
//     //   }


//   return (
//     <div className="addEvent">
//       <button onClick={handleClick}>{isAttending ? "Attending" : "Add Event"}</button>
//       {/* <button>{isAttending ? "Attending" : "Add Event"}</button> */}
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     user: state.user, 
//     event: state.event,
//   }
// };

// export default connect(mapStateToProps, { getEvent, addEvent })(AddEvent);

// function AddEvent(props){


//   let navigate = useNavigate();

  
//     const user = props.user
//     const event = props.event
   
//     const userID = props.user.id
//     const username = props.user.username
    
//     const isEventAlreadyAdded = () => {
//       return user.userEvents.some((userEvent) => userEvent.id === event.id);
//     };

//     const [isAttending, setIsAttending] = useState(isEventAlreadyAdded());

  
//     // const handleClick = (e) => {
//     //   e.preventDefault();
//     //   if (!isEventAlreadyAdded()) {
//     //     props.addEvent({ user, event });
//     //   } else {
//     //     alert("You have already added this event.");
//     //   }
//     // };
    
//   // const handleClick = (e) => {
//   //   e.preventDefault();
//   //   if (!isEventAlreadyAdded()) {
//   //     props.addEvent({ user, event });
//   //     setIsAttending(true);
//   //   } else {
//   //     alert("You have already added this event.");
//   //   }
//   // };
//   const handleClick = (e) => {
//     e.preventDefault();
//     if (isEventAlreadyAdded()){
//       setIsAttending(true);}
//     else if (!isEventAlreadyAdded()) {
//       props.addEvent({ user, event });
//       setIsAttending(true);
//     }
//      else {
//       alert("You have already added this event.");
//     }
//   };


//     // const handleClick = (e) => {
//     //     e.preventDefault()
//     //     props.addEvent({ user, event } )
//     //   }

    

  
//     return (<div className="addEvent">


//             {/* <button onClick={handleClick}>
//             Attending
//             </button>             */}
//                   {/* <button onClick={handleClick}>{isAttending ? "Attending" : "Add Event"}</button> */}
//                   <button {isAttending ? "Attending" : "Add Event"}</button>
//    </div>
//     )
// };



// const mapStateToProps = (state) => {
//     return {
//        user: state.user, 
//        event: state.event,
//       //  userEvents: state.user.userEvents
//     }
        
// }


// // export default connect(null, { submitSignup, submitLogin, getEvent, addEvent })(AddEvent)
// export default connect(mapStateToProps, { getEvent, addEvent })(AddEvent);