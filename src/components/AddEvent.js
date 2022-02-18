// import {connect} from 'react-redux'
// import { useParams } from 'react-router-dom';
// import { getEvent } from '../redux/actionCreators';
// import { Link, Outlet} from 'react-router';
// import { useEffect } from 'react';
// import Login from "../components/Login";
// import Signup from "../components/Signup";
// import EventCard from "../components/EventCard";
// import { submitSignup, submitLogin } from '../redux/actionCreators';
// import MyProfile from "../components/MyProfile";

// function AddEvent(props){


// // const [attending, setAttending] = useState("")
// // const [maybe_attending, setMaybeAttending] = useState("")

// // const handleClick = {
// //     props.AddEvent(attending)
// // }

// useEffect(submitLogin, [submitLogin], submitSignup, [submitSignup] )
    


//     return (
//         <div className="Atttendance Button">

//         {/* <button  onClick={props.first_name}>   </button> */}
//         <h1> Hi {props.first_name} </h1>
  
//         </div>
    
//     )


// }

// const mapStateToProps = (state) => {
//     return {...state.user}
// }


// export default connect(mapStateToProps, { submitSignup, submitLogin })(AddEvent)

// const mapStateToProps = (state) => ({})
// function connect
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link, Outlet} from 'react-router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import Login from "../components/Login";
import Signup from "../components/Signup";
import EventCard from "../components/EventCard";
import { submitSignup, submitLogin, addEvent, getEvent } from '../redux/actionCreators';
import EventShow from "../components/EventCard";






function AddEvent(props){

    useEffect(submitLogin, [submitLogin], submitSignup, [submitSignup], getEvent, [getEvent] )

  
    // const user_id = useSelector((state) => state.todos[props.id])


    const handleClick = (e) => {
        e.preventDefault()
    //    props.addEvent(props.id)
      }
    

    return (<div className="addEvent">

{/* <h1> Hi {props.username} </h1> */}

            <button onClick={handleClick}>
            Attending
            </button>
    
   </div>
    )
};

const mapStateToProps = (state) => {
    return {
       ...state.selectedUserEvent,
    
    }
        
}



export default connect(mapStateToProps, { submitSignup, submitLogin, getEvent, addEvent })(AddEvent)