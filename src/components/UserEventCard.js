// import { Link, Outlet } from 'react-router-dom';

// export default function UserEventCard({
//   id,
//   performer_name,
//   venue_name,
//   venue_address,
//   datetime,
//   formatted_datetime,
//   event_id,
// }) {
//   return (
//     <div className="user_event_cards">
//       <Link to={`/events/${event_id}`}>
//         <h3>{performer_name}</h3>
//       </Link>
//       <p>{venue_name}</p>
//       <p>{venue_address}</p>
//       <p>{formatted_datetime}</p>
//     </div>
//   );
// }
// import { Link } from 'react-router-dom';

// export default function UserEventCard({
//   event_id,
//   performer_name,
//   venue_name,
//   venue_address,
//   formatted_datetime,
// }) {
//   const date = new Date(formatted_datetime);
//   const dayOfWeek = date.toLocaleString('default', { weekday: 'short' });
//   const day = date.getDate();
//   const month = date.toLocaleString('default', { month: 'short' });
//   let hours = date.getHours();
//   const minutes = date.getMinutes().toString().padStart(2, '0');
//   const period = hours >= 12 ? 'pm' : 'am';
//   hours = hours % 12;
//   hours = hours ? hours : 12;

//   return (
//     <div className="user_event_cards">
//       <Link to={`/events/${event_id}`} className="event-link">
//         <div className="event-left">
//           <p>{`${month} ${day}`}</p>
//           <p>{`${dayOfWeek} - ${hours}:${minutes}${period}`}</p>
//         </div>
//         <div className="event-right">
//           <h3>{performer_name ?? 'N/A'}</h3>
//           <p>{`${venue_name ?? 'N/A'} - ${venue_address ?? 'N/A'}`}</p>
//         </div>
//       </Link>
//     </div>
    
//   );
// }
import { Link } from 'react-router-dom';

export default function UserEventCard({
  event_id,
  performer_name,
  venue_name,
  venue_address,
  formatted_datetime,
}) {
  // const date = new Date(formatted_datetime);
  // const dayOfWeek = date.toLocaleString('default', { weekday: 'short' });
  // const day = date.getDate();
  // const month = date.toLocaleString('default', { month: 'short' });
  // let hours = date.getHours();
  // const minutes = date.getMinutes().toString().padStart(2, '0');
  // const period = hours >= 12 ? 'pm' : 'am';
  // hours = hours % 12;
  // hours = hours ? hours : 12;
  // const date = new Date(formatted_datetime);
  // const dayOfWeek = date.toLocaleString('default', { weekday: 'short' });
  // const day = date.getDate();
  // const month = date.toLocaleString('default', { month: 'short' });
  // let hours = date.getHours();
  // const minutes = date.getMinutes().toString().padStart(2, '0');
  // const period = hours >= 12 ? 'pm' : 'am';
  // hours = hours % 12;
  // hours = hours ? hours : 12;
  console.log(formatted_datetime);

  let date = new Date(formatted_datetime);
  if (isNaN(date.getTime())) {
    // Default date if parsing fails
    date = new Date();
  }
  const dayOfWeek = date.toLocaleString('default', { weekday: 'short' });
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const period = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;

  

  return (
    <div className="user_event_cards">
      <Link to={`/events/${event_id}`} className="event-link">
        <div className="event-left">
          <p>{`${month} ${day}`}</p>
          <p>{`${dayOfWeek} - ${hours}:${minutes}${period}`}</p>
        </div>
        <div className="event-right">
          <h3>{performer_name ?? 'N/A'}</h3>
          <p>{`${venue_name ?? 'N/A'} - ${venue_address ?? 'N/A'}`}</p>
        </div>
      </Link>
      <style jsx>{`
       .no-bullets {
        list-style-type: none;
      }
      
      .event-link {
        display: flex;
        justify-content: space-between;
        border: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 10px;
        text-decoration: none;
        color: inherit;
        transition: background-color 0.3s;
      }
      
      .event-link:hover {
        background-color: #f5f5f5;
      }
      
      .event-left,
      .event-right {
        flex: 1;
      }
      `}</style>
      
    </div>
  );
}

// import { Link, Outlet } from 'react-router-dom'


// export default function UserEventCard({id, performer_name, venue_name, venue_address, datetime, event_id, formattedTime }){
  


//   return (<div className="user_event_cards">
 
// <Link to={`/events/${event_id}`}><h3>{performer_name}</h3></Link> 

// {/* <h3>{performer_name}</h3> */}
//     <p>{venue_name}</p>
//     <p>{venue_address}</p>
//     <p>{formattedTime}</p>
//   </div>);

// }


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



   


   