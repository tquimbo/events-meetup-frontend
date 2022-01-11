import logo from './logo.svg';
import './App.css';
import EventIndex from './containers/EventIndex';
import Search from './components/Search';
// import { EventIndex, Search} from './components'




function App() {
  return (
    <div className="App">
 
      <header className="App-header">
        <Search/>
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Events Meetup!</h1>
        <EventIndex/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
