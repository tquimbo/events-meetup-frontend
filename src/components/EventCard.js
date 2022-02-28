
   
import { Link, Outlet } from 'react-router-dom'


export default function EventCard({id, performerName, venueName, venueAddress, datetime }){
  


  return (<div className="cards">
 

<Link to={`/events/${id}`}><h3>{performerName}</h3></Link> 


    <p>{venueName}</p>
    <p>{venueAddress}</p>

  </div>);

  



}


   
