import { Link, Outlet } from 'react-router-dom'


export default function UserEventCard({id, performer_name, venue_name, venue_address, datetime, event_id }){
  


  return (<div className="user_event_cards">
 
<Link to={`/events/${id}`}><h3>{performer_name}</h3></Link> 

{/* <h3>{performer_name}</h3> */}
    <p>{venue_name}</p>
    <p>{venue_address}</p>
    {/* <p>{datetime}</p> */}
  </div>);

}


// export default function UserEventCard({id, event, performer_name, venue_name, venue_address, datetime }){
  
//   // const eventID = event.id

//   return (<div className="user_event_cards">
 
// <Link to={`/events/${id}`}><h3>{performer_name}</h3></Link> 

// {/* <h3>{performer_name}</h3> */}
//     <p>{venue_name}</p>
//     <p>{venue_address}</p>
//     {/* <p>{datetime}</p> */}
//   </div>);

// }

// export default function UserEventCard({props}){
  
//   // const UserEventID = props.user.userEvents.userEvent.event_id
//   const UserEventID = props.user.userEvents.event_id

//   return (<div className="user_event_cards">
 
// <Link to={`/events/${UserEventID}`}><h3>{props.performer_name}</h3></Link> 

// {/* <h3>{performer_name}</h3> */}
//     <p>{props.venue_name}</p>
//     <p>{props.venue_address}</p>
//     {/* <p>{datetime}</p> */}
//   </div>);

// }



   


   