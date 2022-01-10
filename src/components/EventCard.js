export default function EventCard({id, performer_name, venue_name, venue_address, datetime}){
  return <div className="card">
   <h2>{performer_name}</h2>
    <p>{venue_name}</p>
    <p>{venue_address}</p>
    <p>{datetime}</p>
  </div>
}