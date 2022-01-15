export default function EventCard({performer_name, venue_name, venue_address, datetime }){
  return (<div className="cards">
   <h2>{performer_name}</h2>
    <p>{venue_name}</p>
    <p>{venue_address}</p>
    <p>{datetime}</p>
  </div>);

}


