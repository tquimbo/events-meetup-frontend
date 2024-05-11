
<<<<<<< HEAD
import { useEffect } from "react";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchSearchResults } from '../redux/searchActions.ts';
import { Link, Outlet } from 'react-router-dom';
import { useParams } from "react-router-dom";



const SearchResults = ({ loading, events, error }) => {
  const { input } = useParams(); 

  const dispatch = useDispatch(); // Move the useDispatch hook above the useEffect

  useEffect(() => {
    dispatch(fetchSearchResults(input));
  }, [dispatch, input]); // Remove fetchSearchResults from dependencies as it is not needed


  // useEffect(() => {
  //   fetchSearchResults(input);
  // }, [fetchSearchResults, input]);
  // useEffect(() => {
  //   dispatch(fetchSearchResults(input));
  // }, [dispatch, fetchSearchResults, input]);

  // const dispatch = useDispatch();


  // useEffect(() => {
  //   fetchSearchResults();
  // }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!events || events.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <div>
      {/* <h2>Search Results:</h2> */}
      
      <ul style={{ listStyleType: "none" }}>
        {events.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}><h3>{event.performerName}</h3></Link> 

            {/* <h3>{event.performerName}</h3> */}
            <p>{event.venueName}</p>
            <p>{event.venueAddress}</p>
            <p>{event.formattedDatetime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.events,
    // loading: state.loading, // update this according to your state structure
    // error: state.error, // update this according to your state structure
  
  };
};

export default connect(mapStateToProps, { fetchSearchResults })(SearchResults);
=======
// import { useEffect } from "react";
// import { connect } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { fetchSearchResults } from '../redux/searchActions.ts';
// import { Link, Outlet } from 'react-router-dom';
// import { useParams } from "react-router-dom";
>>>>>>> ad5e4ac9a384238885dc359aa4ad12fe4bab6b44



// const SearchResults = ({ loading, events, error }) => {
//   const { input } = useParams(); 

//   const dispatch = useDispatch(); // Move the useDispatch hook above the useEffect

//   useEffect(() => {
//     dispatch(fetchSearchResults(input));
//   }, [dispatch, input]); // Remove fetchSearchResults from dependencies as it is not needed


//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   if (!events || events.length === 0) {
//     return <p>No results found.</p>;
//   }

//   return (

    
//     <div>
//       {/* <h2>Search Results:</h2> */}
      
//       {/* <ul style={{ listStyleType: "none" }}> */}
//       <ul className="no-bullets">

//       {events.map((event) => {
//   // Convert the event.formattedDatetime string to a Date object
//   const date = new Date(event.formattedDatetime);

//   // Extract day of the week, date, month, hours, and minutes
//   const dayOfWeek = date.toLocaleString('default', { weekday: 'short' });
//   const day = date.getDate();
//   const month = date.toLocaleString('default', { month: 'short' });
//   let hours = date.getHours();
//   const minutes = date.getMinutes().toString().padStart(2, '0');
  
//   // Convert to 12-hour time format with AM/PM
//   const period = hours >= 12 ? 'pm' : 'am';
//   hours = hours % 12;
//   hours = hours ? hours : 12; // If the hour is 0, change it to 12 for 12:xx am

//   return (
//     <li key={event.id}>
//          {/* <img src={event.performerImage} alt={event.performerName} /> */}
//       <Link to={`/events/${event.id}`}><h3>{event.performerName}</h3></Link>
//       <p>{event.venueName}</p>
//       <p>{event.venueAddress}</p>
//       <p>{`${dayOfWeek}, ${month} ${day}, ${hours}:${minutes}${period}`}</p>
//     </li>
//   );
// })}

// {/*         
//         {events.map((event) => (
//           <li key={event.id}>
//             <Link to={`/events/${event.id}`}><h3>{event.performerName}</h3></Link> 

//             {/* <h3>{event.performerName}</h3> */}
//             {/* <p>{event.venueName}</p>
//             <p>{event.venueAddress}</p>
//             <p>{event.formattedDatetime}</p>
//           </li>
//         ))} */}
//       </ul> 

//     </div>
//   );
// };



// const mapStateToProps = (state) => {
//   return {
//     events: state.events,
//     // loading: state.loading, // update this according to your state structure
//     // error: state.error, // update this according to your state structure
  
//   };
// };

// export default connect(mapStateToProps, { fetchSearchResults })(SearchResults);

// import { useEffect } from "react";
// import { connect } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { fetchSearchResults } from '../redux/searchActions.ts';
// import { Link } from 'react-router-dom';
// import { useParams } from "react-router-dom";


// const SearchResults = ({ loading, events, error }) => {
//   const { input } = useParams(); 
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchSearchResults(input));
//   }, [dispatch, input]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   if (!events || events.length === 0) {
//     return <p>No results found.</p>;
//   }

//   return (
//     <div>
//       <ul className="no-bullets">
//       {events.map((event) => {
//         const date = new Date(event.formattedDatetime);
//         const dayOfWeek = date.toLocaleString('default', { weekday: 'short' });
//         const day = date.getDate();
//         const month = date.toLocaleString('default', { month: 'short' });
//         let hours = date.getHours();
//         const minutes = date.getMinutes().toString().padStart(2, '0');
//         const period = hours >= 12 ? 'pm' : 'am';
//         hours = hours % 12;
//         hours = hours ? hours : 12; 

//         return (
//           <Link to={`/events/${event.id}`} key={event.id} style={{ textDecoration: 'none', color: 'inherit' }}>
//             <li className="event-button">
//               <div className="event-left">
//                 <p>{dayOfWeek}</p>
//                 <p>{`${hours}:${minutes}${period}`}</p>
//               </div>
//               <div className="event-right">
//                 <h3>{event.performerName}</h3>
//                 <p>{`${event.venueName} * ${event.venueAddress}`}</p>
//               </div>
//             </li>
//           </Link>
//         );
//       })}
//       </ul>
//       <style jsx>{`
//         .no-bullets {
//           list-style-type: none;
//           padding: 0;
//         }
//         .event-button {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 15px;
//           border: 1px solid transparent;
//           transition: background-color 0.2s;
//         }
//         .event-button:hover {
//           background-color: #f0f0f0;
//           cursor: pointer;
//         }
//       `}</style>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     events: state.events,
//   };
// };

// export default connect(mapStateToProps, { fetchSearchResults })(SearchResults);
import { useEffect } from "react";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchSearchResults } from '../redux/searchActions.ts';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

const SearchResults = ({ loading, events, error }) => {
  const { input } = useParams(); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchResults(input));
  }, [dispatch, input]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!events || events.length === 0) {
    return <p>No results found.</p>;
  }

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
  };
};

export default connect(mapStateToProps, { fetchSearchResults })(SearchResults);