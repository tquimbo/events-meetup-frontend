
   
import { Link } from 'react-router-dom'


export default function EventCard({id, performer_name, venue_name, venue_address, datetime }){
  
  console.log(id)

  return (<div className="cards">

<Link to={`/events/${id}`}><h3>{performer_name}</h3></Link>

    <p>{venue_name}</p>
    <p>{venue_address}</p>
    <p>{datetime}</p>
  </div>);

}


