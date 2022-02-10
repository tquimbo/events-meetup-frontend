// import {useEffect} from "react"
// import {getEvents} from '../redux/actionCreators'
// import { connect } from 'react-redux'
// import EventCard from "../components/EventCard"

// export default function EventSearchResults({ events }) {

//     const { data, setData } = useFetch();
  

//     return <div className="cards">
//   {events.map(event => <EventCard {...event} key={event.id}/>)}
// </div>
// }

// const mapStateToProps = (state) => {
// return {events: state.events}


// }


// export default connect(mapStateToProps, { getEvents })(EventIndex)


// import React from "react";

// import useFetch from "./hooks/useFetch";
// import House from "./components/House";
// import EventCardSearch from "../components/EventCardSearch";

// export default function App() {
//   const { data, setData } = useFetch();
//   return (
//     <main>
//       <input
//         type="text"
//         placeholder="Type your favorite house"
//         value={data.slug}
//         onChange={(e) => setData({ ...data, slug: e.target.value })}
//       />
//       <br />
//       {data.results.length > 0 ? <EventCardSearch event={data.results[0]} /> : null}
//     </main>
//   );
// }

// import React from "react";

// import Members from "./Members";

// export default function EventSearchResults({ family }) {
//   return (
//     <div>
//       <h1>{family.name}</h1>
//       <Members members={family.members} />
//     </div>
//   );
// }

// import {useEffect} from "react"
// import {getEvents} from '../redux/actionCreators'
// import { connect } from 'react-redux'
// import { Routes, Route, Outlet } from "react-router-dom";
// import EventCard from "../components/EventCard"


// function EventSearchIndex({getSearchResults, events}){

//   useEffect(getSearchResults, [getSearchResults])

//       return <div className="cards">
//     {events.map(event => <EventCard {...event} key={event.id}/>)}
//     <Outlet />
//   </div>
// }

//   const mapStateToProps = (state) => {
//   return {events: state.events}

// }


// export default connect(mapStateToProps, { getSearchResults })(EventSearchIndex)