
   
import { Link, Outlet } from 'react-router-dom'


export default function EventCard({id, performer_name, venue_name, venue_address, datetime }){
  


  return (<div className="cards">
 
<Link to={`/events/${id}`}><h3>{performer_name}</h3></Link> 

{/* <h3>{performer_name}</h3> */}
    <p>{venue_name}</p>
    <p>{venue_address}</p>
    {/* <p>{datetime}</p> */}
  </div>);

}


   
// import { Link, Outlet } from 'react-router-dom'


// export default function EventCard(props){
  


//   return (<div className="cards">
 
// <Link to={`/events/${props.event_id}`}><h3>{props.performer_name}</h3></Link> 

// {/* <h3>{performer_name}</h3> */}
//     <p>{props.venue_name}</p>
//     <p>{props.venue_address}</p>
//     {/* <p>{datetime}</p> */}
//   </div>);

// }





