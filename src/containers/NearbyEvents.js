import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchNearbyEvents } from '../redux/nearbyActions.ts'; // Adjust the path if different.
import { Link } from 'react-router-dom';

const NearbyEvents = ({ loading, events, error }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();

  
  useEffect(() => {
    const getIPAddress = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        return data.ip;
      } catch (error) {
        console.error("Error getting IP address:", error);
        return null;
      }
    };

    (async () => {
      const ip = await getIPAddress();
      if (ip) {
        dispatch(fetchNearbyEvents(ip));
      } else {
        console.error("Failed to get IP address");
      }
    })();
  }, [dispatch]);

  const handleNext = () => {
    if (currentIndex < events.length - 4) {
      setCurrentIndex(currentIndex + 4);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 4);
    }
  };


 
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
                <div className="event-top">
                  <p>{`${month} ${day}`}</p>
                  <p>{`${dayOfWeek} - ${hours}:${minutes}${period}`}</p>
                </div>
                <div className="event-bottom">
                  <img src={event.performerImage} alt={`${event.performerName}`} />
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
          flex-direction: column;
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

        .event-top,
        .event-bottom {
          flex: 1;
        }

        .event-top {
          display: flex;
          justify-content: space-between;
        }

        .event-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .event-bottom img {
          max-width: 100%;
          height: auto;
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
