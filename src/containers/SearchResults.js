
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
      
      {/* <ul style={{ listStyleType: "none" }}> */}
      <ul className="no-bullets">

      {events.map((event) => {
  // Convert the event.formattedDatetime string to a Date object
  const date = new Date(event.formattedDatetime);

  // Extract day of the week, date, month, hours, and minutes
  const dayOfWeek = date.toLocaleString('default', { weekday: 'short' });
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  
  // Convert to 12-hour time format with AM/PM
  const period = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // If the hour is 0, change it to 12 for 12:xx am

  return (
    <li key={event.id}>
         <img src={event.performerImage} alt={event.performerName} />
      <Link to={`/events/${event.id}`}><h3>{event.performerName}</h3></Link>
      <p>{event.venueName}</p>
      <p>{event.venueAddress}</p>
      <p>{`${dayOfWeek}, ${month} ${day}, ${hours}:${minutes}${period}`}</p>
    </li>
  );
})}

{/*         
        {events.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}><h3>{event.performerName}</h3></Link> 

            {/* <h3>{event.performerName}</h3> */}
            {/* <p>{event.venueName}</p>
            <p>{event.venueAddress}</p>
            <p>{event.formattedDatetime}</p>
          </li>
        ))} */}
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

