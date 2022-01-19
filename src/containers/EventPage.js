import React from "react";
import { Route } from "react-router-dom";
import EventIndex from "../components/EventIndex";
// import the `MovieShow` component:
import EventShow from "../components/EventShow";


// Here we add `match` to the arguments so we can access the path information
// in `routerProps` that is passed from App.js
// const EventsPage = ({ match, events }) => (
//   <div>
//     <EventIndex events={events} />
//     // We also add a `Route` component that will render `MovieShow` // when a movie
//     is selected
//     <Route path={`${event.url}/:eventId`} component={EventShow} />
//   </div>
// );

export default EventsPage;