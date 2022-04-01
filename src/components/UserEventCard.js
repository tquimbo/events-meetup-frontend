import { Link, Outlet } from 'react-router-dom'


export default function UserEventCard({id, performer_name, venue_name, venue_address, datetime }){

  
  


  return (<div className="user_event_cards">
 
<Link to={`/events/${id}`}><h3>{performer_name}</h3></Link> 

{/* <h3>{performer_name}</h3> */}
    <p>{venue_name}</p>
    <p>{venue_address}</p>
    {/* <p>{datetime}</p> */}
  </div>);

}


   