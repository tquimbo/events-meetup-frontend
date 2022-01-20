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


import React from "react";

import useFetch from "./hooks/useFetch";
import House from "./components/House";

export default function App() {
  const { data, setData } = useFetch();
  return (
    <main>
      <input
        type="text"
        placeholder="Type your favorite house"
        value={data.slug}
        onChange={(e) => setData({ ...data, slug: e.target.value })}
      />
      <br />
      {data.results.length > 0 ? <Event family={data.results[0]} /> : null}
    </main>
  );
}