// import { useParams } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { getEvent } from '../redux/actionCreators.ts';
// import { getSearch } from '../redux/actionCreators.ts';
// import { Link, Outlet} from 'react-router';
// import { useEffect } from 'react';
// import EventCard from "../components/EventCard";
// import AddEvent from "../components/AddEvent";
// import Login from "../components/Login";
// import Signup from "../components/Signup";
// import { submitSignup, submitLogin } from '../redux/actionCreators.ts';

// // function SearchShow({getEvent, performerName, performerImage, venueName, venueAddress, datetime, attendance_status, username, id, addEvent, userId, getSearch}){
//     function SearchShow(props){

 

 
   
//     const searchId = useParams().searchId;


//     useEffect(() => {
//         getSearch(searchId)
//       }, [getSearch, searchId])

//     //    useEffect(getEvent, [getEvent])
//     // {eventId}
   
// return (<div className="search_show">

    
//    {/* <h3>{performerName}</h3>
//    <p> {params.eventId} </p>
//     <img src={performerImage} alt={venueName}/>
//     <p>{venueName}</p>
//     <p>{venueAddress}</p>
//     <p>{attendance_status}</p> */}

// <h3>{props.search.event.performers[0].name}</h3>  
// {/* <p>{event.datetime_utc}</p> */}

//    <p>{props.search.event.venue.name}</p>
//    <p>{props.search.event.address}, {props.search.event.venue.extended_address}</p>
    
  
    

//    <AddEvent/>

//   </div>

 
// )};





// const mapStateToProps = (state) => {
//   return {...state.event,
//     ...state.user,
// ...state.search}
//     }
    
// // export default EventShow

// export default connect(mapStateToProps, {getEvent, getSearch })(SearchShow);