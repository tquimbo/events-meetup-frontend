// import {useEffect} from "react"
// import {getEvents} from '../redux/actionCreators'
// import { connect } from 'react-redux'
// import { Routes, Route, Outlet } from "react-router-dom";
// import EventCard from "../components/EventCard"


// const FilterEvents = (getEvents, events, query) => {

//     useEffect(getEvents)


//     if (!query) {
//         return events;
//     }

//     return events.filter((event) => {
//         const eventName = event.name.toLowerCase();
//         return eventName.includes(query);
//     });
// };

// export default FilterEvents;
// import {useEffect} from "react"
// import {getResults} from '../redux/actionCreators'
// import { connect } from 'react-redux'
// import { Routes, Route, Outlet } from "react-router-dom";
// import EventCard from "../components/EventCard"


// function FilterEvents({getResults, events, query}){

//   useEffect(getResults, [getResults])

//   if (!query) {
//     return events;
// }

      
        
//     // {events.map(event => <EventCard {...event} key={event.id}/>)}
    
// return events.filter((event) => {
// const eventName = event.name.toLowerCase();
// return eventName.includes(query);});
// };

// const mapStateToProps = (state) => {
//     return {events: state.events}
//   }


//   export default connect(mapStateToProps, { getResults })(FilterEvents)
