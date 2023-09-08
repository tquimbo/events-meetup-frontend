import React, { useState } from 'react';

const ConcertsComponent: React.FC = () => {
    const [concerts, setConcerts] = useState<any[]>([]);

    const fetchConcerts = async (lat: number, lon: number) => {
        try {
            const response = await fetch('/getConcertsNearMe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    latitude: lat,
                    longitude: lon,
                }),
            });
            const data = await response.json();
            setConcerts(data);
        } catch (error) {
            console.error('Error fetching concerts:', error);
        }
    };

    const getLocationAndConcerts = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                fetchConcerts(lat, lon);
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    };

    return (
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
      
        // <div>
        //     <button className="btn btn-primary" onClick={getLocationAndConcerts}>Concerts Around Me</button>
        //     <ul>
        //         {concerts.map(concert => (
        //             <li key={concert.id}>{concert.name} - {concert.date}</li>
        //         ))}
        //     </ul>
        // </div>
    );
};

export default ConcertsComponent;