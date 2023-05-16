
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
      
      <ul>
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

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store'; // Update this import in the store/index.ts file.
// import { Card, ListGroup } from 'react-bootstrap';

// const Results: React.FC = () => {
//   const { results } = useSelector((state: RootState) => state.search);

//   return (
//     <ListGroup>
//       {results.map((event: any) => (
//         <ListGroup.Item key={event.id}>
//           <Card>
//             <Card.Body>
//               <Card.Title>{event.title}</Card.Title>
//               <Card.Text>{event.venue.name} - {event.datetime_local}</Card.Text>
//             </Card.Body>
//           </Card>
//         </ListGroup.Item>
//       ))}
//     </ListGroup>
//   );
// };

// export default Results;
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE, fetchSearchResults } from '../redux/searchActions.ts';
// import {useEffect} from "react";
// import { connect } from 'react-redux';

// const SearchResults = ({loading, events, error,}) => {
//   // const { events, loading, error } = useSelector((state) => state.search);

//   useEffect(fetchSearchResults, [fetchSearchResults])

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
//       <h2>Search Results:</h2>
//       <ul>
//         {events.map((event) => (
//           <li key={event.id}>
//             <h3>{event.performer_name}</h3>
//             <p>{event.venue_name}</p>
//             <p>{event.venue_address}</p>
//             {/* <p>{result.datetime}</p> */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// // export default SearchResults;

// const mapStateToProps = (state) => {
//   return {events: state.events}
// }


// export default connect(mapStateToProps, { fetchSearchResults })(SearchResults)

// const SearchResults = () => {
//   const { results, loading, error } = useSelector((state) => state.search);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   if (!results || results.length === 0) {
//     return <p>No results found.</p>;
//   }

//   return (
//     <div>
//       <h2>Search Results:</h2>
//       <ul>
//         {results.map((result) => (
//           <li key={result.id}>
//             <h3>{result.performer_name}</h3>
//             <p>{result.venue_name}</p>
//             <p>{result.venue_address}</p>
//             {/* <p>{result.datetime}</p> */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchResults;


// import {useEffect} from "react"
// import {getEvents} from '../redux/actionCreators'
// import { connect } from 'react-redux'
// import EventCard from "../components/EventCard"
// import SearchBar from './components/SearchBar';


// function SearchResults({getEvents, events}){

//     const { search } = window.location;
// const query = new URLSearchParams(search).get('input');
// const [searchQuery, setSearchQuery] = useState(query || '');
// const FilteredEvents = FilterEvents(events, searchQuery);

// const FilterEvents = (events, query) => {
//     if (!query) {
//         return events;
//     }
  
//     return events.filter((event) => {
//         const eventName = event.name.toLowerCase();
//         return eventName.includes(query);
//     });
//   };

//   useEffect(getEvents, [getEvents])

//       return 

//       <ul>
//       {FilteredEvents.map(event => (
//           <li key={event.key}>{event.name}</li>
//       ))}
//   </ul>

//   </div>
// }

//   const mapStateToProps = (state) => {
//   return {events: state.events}


// }


// import {useState} from "react"
// import {useEffect} from "react"
// import {getEvents} from '../redux/actionCreators'
// import { connect } from 'react-redux'
// import EventCard from "../components/EventCard"
// import EventCardSearch from "../components/EventCardSearch"
// import SearchBar from './components/SearchBar';
// import FilterEvents from './components/FilterEvents';


// export default function SearchResults() {

// const { search } = window.location;
// const query = new URLSearchParams(search).get('results');
// const [searchQuery, setSearchQuery] = useState(query || '');
// const FilteredEvents = EventCardSearch(events, searchQuery);


// return (
//     <div>
//         <SearchBar
//             searchQuery={searchQuery}
//             setSearchQuery={setSearchQuery}
//         />
//         <ul>
//             {FilteredEvents.map(event => (
//                 <li key={event.key}>{event.name}</li>
//             ))}
//         </ul>
//     </div>
// );
// }


// import {useEffect} from "react"
// import {getEvents} from '../redux/actionCreators.ts'
// import { connect } from 'react-redux'
// import { Routes, Route, Outlet } from "react-router-dom";
// import EventCard from "../components/EventCard"
// import EventCardSearch from "../components/EventCard"
// import SearchBar from "../components/SearchBar"
// import { getSearchResults } from '../redux/actionCreators.ts';
// // import { fetchEventDetails } from '../redux/actionCreators';
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom'




// function SearchResults(props){


//   const {searchQuery} = useParams();


// //  useEffect(getSearchResults, [getSearchResults], fetchEventDetails, [fetchEventDetails])

//  useEffect(getSearchResults, [getSearchResults])



//  return <div className="test">
//  {/* {props.search.events.map(<p>event => <EventCard {...event} key={event.id}/>)} */}


//  {props.search.events.map((event) => (<li key={event.id} 

// > <Link to={`/search/${event.id}`}>  <h3>{event.performers[0].name}</h3>  </Link>
// {/* <p>{event.datetime_utc}</p> */}

//    <p>{event.venue.name}</p>
//    <p>{event.venue.address}, {event.venue.extended_address}
// </p>


// </li>))}

 


 
// </div>



//     //   return <div className="search_cards">
//     // {/* {props.search.events.map(event => <EventCardSearch {...event} key={event.id}/>)} */}
//     // {/* <ul> */}

//     //     {/* {props.search_results.events.map((event) => (<li key={event.id}>{event.type}</li>))} */}

//     //     <p> Hi </p>

        



// /* </ul> */
   
   


// }



//   const mapStateToProps = (state) => {
//   return {search: state.search}
// }


// export default connect(mapStateToProps, { getSearchResults })(SearchResults)
