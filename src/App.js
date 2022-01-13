import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import {getEvents} from './redux/actionCreators';
import { connect } from 'react-redux';
import EventIndex from './containers/EventIndex';
import SearchBar from './components/SearchBar';
import useFetch from "./hooks/useFetch";

// import { EventIndex, Search} from './components'

const { search } = window.location;
const query = new URLSearchParams(search).get('s');



function App() {
  return (

   

    <div className="App">
 
      <header className="App-header">
        <SearchBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Events Meetup!</h1>
        
        <div>
        <EventIndex/>
            {/* <ul>
                {filteredEvents.map(event => (
                    <li key={event.key}>{event.name}</li>
                ))}
            </ul> */}
        </div>

        

      
      </header>
    </div>
  );
}



export default App;
