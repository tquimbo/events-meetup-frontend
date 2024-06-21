// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const TrendingEvents = () => {
//   const [trendingEvents, setTrendingEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('/trending_events')
//       .then(response => response.json())
//       .then(data => {
//         setTrendingEvents(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading trending events: {error}</p>;

//   return (
//     <div>
//       <h2>Trending Events</h2>
//       <ul className="no-bullets">
//         {trendingEvents.map(event => (
//           <li key={event.id}>
//             <Link to={`/events/${event.id}`} className="event-link">
//               <div className="event-top">
//                 <p>{new Date(event.date).toLocaleDateString()}</p>
//               </div>
//               <div className="event-bottom">
//                 <img src={event.image_url} alt={event.name} />
//                 <h3>{event.name}</h3>
//                 <p>{event.venue}</p>
//               </div>
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <style jsx>{`
//         .no-bullets {
//           list-style-type: none;
//         }
        
//         .event-link {
//           display: flex;
//           flex-direction: column;
//           border: 1px solid #ccc;
//           padding: 10px;
//           margin-bottom: 10px;
//           text-decoration: none;
//           color: inherit;
//           transition: background-color 0.3s;
//         }

//         .event-link:hover {
//           background-color: #f5f5f5;
//         }

//         .event-top,
//         .event-bottom {
//           flex: 1;
//         }

//         .event-top {
//           display: flex;
//           justify-content: space-between;
//         }

//         .event-bottom {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }

//         .event-bottom img {
//           max-width: 100%;
//           height: auto;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TrendingEvents;
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTrendingEvents } from '../redux/trendingActions.ts';

// const TrendingEvents = () => {
//   const dispatch = useDispatch();
//   const { loading, events, error } = useSelector((state) => state.trending);

//   useEffect(() => {
//     dispatch(fetchTrendingEvents());
//   }, [dispatch]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading trending events: {error}</p>;

//   return (
//     <div>
//       <h2>Trending Events</h2>
//       <ul className="no-bullets">
//         {events.map((event) => (
//           <li key={event.id}>
//             <Link to={`/events/${event.id}`} className="event-link">
//               <div className="event-top">
//                 <p>{new Date(event.date).toLocaleDateString()}</p>
//               </div>
//               <div className="event-bottom">
//                 <img src={event.image_url} alt={event.name} />
//                 <h3>{event.name}</h3>
//                 <p>{event.venue}</p>
//               </div>
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <style jsx>{`
//         .no-bullets {
//           list-style-type: none;
//         }
        
//         .event-link {
//           display: flex;
//           flex-direction: column;
//           border: 1px solid #ccc;
//           padding: 10px;
//           margin-bottom: 10px;
//           text-decoration: none;
//           color: inherit;
//           transition: background-color 0.3s;
//         }

//         .event-link:hover {
//           background-color: #f5f5f5;
//         }

//         .event-top,
//         .event-bottom {
//           flex: 1;
//         }

//         .event-top {
//           display: flex;
//           justify-content: space-between;
//         }

//         .event-bottom {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }

//         .event-bottom img {
//           max-width: 100%;
//           height: auto;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TrendingEvents;
// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { fetchTrendingEvents } from '../redux/trendingActions.ts';

// const TrendingEvents = ({ loading, events, error, fetchTrendingEvents }) => {

//   useEffect(() => {
//     fetchTrendingEvents();
//   }, [fetchTrendingEvents]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading trending events: {error}</p>;

//   return (
//     <div>
//       <h2>Trending Events</h2>
//       <ul className="no-bullets">
//         {events.map((event) => (
//           <li key={event.id}>
//             <Link to={`/events/${event.id}`} className="event-link">
//               <div className="event-top">
//                 <p>{new Date(event.date).toLocaleDateString()}</p>
//               </div>
//               <div className="event-bottom">
//                 <img src={event.image_url} alt={event.name} />
//                 <h3>{event.name}</h3>
//                 <p>{event.venue}</p>
//               </div>
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <style jsx>{`
//         .no-bullets {
//           list-style-type: none;
//         }
        
//         .event-link {
//           display: flex;
//           flex-direction: column;
//           border: 1px solid #ccc;
//           padding: 10px;
//           margin-bottom: 10px;
//           text-decoration: none;
//           color: inherit;
//           transition: background-color 0.3s;
//         }

//         .event-link:hover {
//           background-color: #f5f5f5;
//         }

//         .event-top,
//         .event-bottom {
//           flex: 1;
//         }

//         .event-top {
//           display: flex;
//           justify-content: space-between;
//         }

//         .event-bottom {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }

//         .event-bottom img {
//           max-width: 100%;
//           height: auto;
//         }
//       `}</style>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   loading: state.trending.loading,
//   events: state.trending.events,
//   error: state.trending.error,
// });

// const mapDispatchToProps = {
//   fetchTrendingEvents,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TrendingEvents);



// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { fetchTrendingEvents } from '../redux/trendingActions.ts';


// const TrendingEvents = ({ events, error, fetchTrendingEvents }) => {
//   useEffect(() => {
//     fetchTrendingEvents();
//   }, [fetchTrendingEvents]);

//   if (error) return <p>Error loading trending events: {error}</p>;

//   return (
//     <div>
//       <h2>Trending Events</h2>
//       <ul className="no-bullets">
//         {events.map((event) => (
//           <li key={event.id}>
//             <Link to={`/events/${event.id}`} className="event-link">
//               <div className="event-top">
//               <img src={event.performerImage} alt={`${event.performerName}`} className="performer-image" />
//                 {/* <p>{new Date(event.formattedDatetime).toLocaleDateString()}</p> */}
//               </div>
//               <div className="event-bottom">
//                 {/* <img src={event.image_url} alt={event.name} /> */}
            
//                 <h3>{event.performerName}</h3>
//                 <p>{new Date(event.formattedDatetime).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} {event.venueName}</p>
//                 {/* <p>{event.venueName}</p> */}
//               </div>
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <style jsx>{`
//         .no-bullets {
//           list-style-type: none;
//         }
        
//         .event-link {
//           display: flex;
//           flex-direction: column;
//           // border: 1px solid #ccc;
//           padding: 10px;
//           margin-bottom: 10px;
//           text-decoration: none;
//           color: inherit;
//           transition: background-color 0.3s;
//         }

//         .event-link:hover {
//           background-color: #f5f5f5;
//         }

//         .event-top,
//         .event-bottom {
//           flex: 1;
//         }

//         .event-top {
//           display: flex;
//           justify-content: space-between;
//         }

//         .event-bottom {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }

//         .event-bottom img {
//           max-width: 100%;
//           height: auto;
//         }


//         .performer-image {
//           width: 100%;
//           height: auto;
//         }

//       `}</style>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   events: state.events,
//   error: state.error,
// });

// const mapDispatchToProps = {
//   fetchTrendingEvents,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TrendingEvents);


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTrendingEvents } from '../redux/trendingActions.ts';

const TrendingEvents = ({ events, error, fetchTrendingEvents }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    fetchTrendingEvents();
  }, [fetchTrendingEvents]);

  const nextEvents = () => {
    if (currentIndex + itemsPerPage < events.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prevEvents = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  if (error) return <p>Error loading trending events: {error}</p>;

  return (
    <div>
      <h2>Trending Events</h2>
      <div className="event-navigation">
        <button onClick={prevEvents} disabled={currentIndex === 0}>
          &lt; Prev
        </button>
        <span>{Math.ceil((currentIndex + 1) / itemsPerPage)} of {Math.ceil(events.length / itemsPerPage)}</span>
        <button onClick={nextEvents} disabled={currentIndex + itemsPerPage >= events.length}>
          Next &gt;
        </button>
      </div>
      <ul className="no-bullets event-list">
        {events.slice(currentIndex, currentIndex + itemsPerPage).map((event) => (
          <li key={event.id} className="event-item">
            <Link to={`/events/${event.id}`} className="event-link">
              <div className="event-top">
                <img src={event.performerImage} alt={`${event.performerName}`} className="performer-image" />
              </div>
              <div className="event-bottom">
                <h3>{event.performerName}</h3>
                <p>{new Date(event.formattedDatetime).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} {event.venueName}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .no-bullets {
          list-style-type: none;
          padding: 0;
        }

        .event-navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .event-list {
          display: flex;
          flex-wrap: wrap;
        }

        .event-item {
          flex: 1 0 22%;
          margin: 0 1%;
        }

        .event-link {
          display: flex;
          flex-direction: column;
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

        .performer-image {
          width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
};

const mapStateToProps = (state) => ({
  events: state.events,
  error: state.error,
});

const mapDispatchToProps = {
  fetchTrendingEvents,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingEvents);