import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import {getEvents} from './redux/actionCreators';
import { connect } from 'react-redux';
import EventIndex from './containers/EventIndex';
// import SearchResults from './containers/EventIndex';
// import SearchBar from './components/SearchBar';
// import FilterEvents from './components/SearchBar';
import useFetch from "./hooks/useFetch";
// import EventSearchResults from './containers/EventIndex';
import EventCard from "./components/EventCard";
import EventShow from "./components/EventShow";
import { Routes, Route } from 'react-router-dom'


// import { EventIndex, Search} from './components'




function App() {
// const { search } = window.location;
// const query = new URLSearchParams(search).get('input');
// const [searchQuery, setSearchQuery] = useState(query || '');
// const FilterEvents = FilterEvents(events, searchQuery);


  return (

  
    <div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1> Events Meetup!</h1>
       
       {/* <EventIndex/>
        */}
       {/* element={<Team />} */}
       
       {/* <Routes>
        <Route path="/events/:id"><EventShow/></Route>
        <Route path="/event
        s"><EventIndex/></Route>
      </Routes> */}

{/* <Route path="teams/:teamId" element={<Team />} /> */}


      <Routes>
      <Route path="events/:id" element={<EventShow />}/>
      <Route path="events" element={<EventIndex />} />
        </Routes>
    

      
    
  


        
      
      </header>
    </div>
  );
}

export default App