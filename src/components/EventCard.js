export default function EventCard({event}){
  return (<div className="card">
   <h2>{event.performer_name}</h2>
    <p>{event.venue_name}</p>
    <p>{event.venue_address}</p>
    <p>{event.datetime}</p>
  </div>);

}


