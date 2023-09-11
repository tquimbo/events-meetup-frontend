import { useEffect } from "react";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchNearbyEvents } from '../redux/nearbyActions.ts'; // Adjust the path if different.
import { Link } from 'react-router-dom';

const NearbyEvents = ({ loading, events, error }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // We're using navigator.geolocation here for simplicity. 
    // A more user-friendly approach might involve a button click.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(fetchNearbyEvents(position.coords.latitude, position.coords.longitude));
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, [dispatch]);

  

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!events || events.length === 0) {
    return <p>No nearby events found.</p>;
  }

  // ... (Use the same JSX and CSS as your SearchResults component for display.)

  return (
    <div>
      <ul className="no-bullets">
      {events.map((event) => {
        const date = new Date(event.formattedDatetime);
        const dayOfWeek = date.toLocaleString('default', { weekday: 'short' });
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const period = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;


        return (
          <li key={event.id}>
          <Link to={`/events/${event.id}`} className="event-link">
            <div className="event-left">
              <p>{`${month} ${day}`}</p>
              <p>{`${dayOfWeek} - ${hours}:${minutes}${period}`}</p>
            </div>
            <div className="event-right">
              <h3>{event.performerName}</h3>
              <p>{`${event.venueName} - ${event.venueAddress}`}</p>
            </div>
          </Link>
        </li>
        );
      })}
      </ul>

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
  
};

const mapStateToProps = (state) => {
  return {
    events: state.events,
    loading: state.loading,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchNearbyEvents })(NearbyEvents);