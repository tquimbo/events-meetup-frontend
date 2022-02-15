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
import {useEffect} from "react"
import {getEvents} from '../redux/actionCreators'
import { connect } from 'react-redux'
import { Routes, Route, Outlet } from "react-router-dom";
import EventCard from "../components/EventCard"
import EventCardSearch from "../components/EventCard"
import SearchBar from "../components/SearchBar"
import { getSearchResults } from '../redux/actionCreators';
import { useParams } from 'react-router-dom';


function SearchResults(props){

    const searchQuery = useParams().searchQuery
      

    useEffect(() => {
        props.getSearchResults(props.searchQuery)
      }, [getSearchResults, props.searchQuery])


      return <div className="search_cards">
    {props.events.map(event => <EventCardSearch {...event} key={event.id}/>)}
    <Outlet />
  </div>

// return <div className="search_cards">
// {
//          event_ids = self.events.map do |e|
//          Event.find_or_create_by(id: e["id"]) do |event|
//              event.performer_name = e["performers"][0]["name"]
//              event.performer_image = e["performers"][0]["image"]
//              event.venue_name = e["venue"]["name"]
//              event.venue_address = e["venue"]["extended_address"]
//              event.venue_city = e["venue"]["city"]
//              event.venue_state = e["venue"]["state"]
//              event.venue_country = e["venue"]["country"]
//              event.venue_zipcode= e["venue"]["postal_code"]
//              event.datetime = e["datetime_local"]          
//          end.id
//        end
//        Event.where(id: events_ids)
// }
// </div>
}

  const mapStateToProps = (state) => {
  return {events: state.events}
}


export default connect(mapStateToProps, { getSearchResults })(SearchResults)