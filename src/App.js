import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";
import { useState } from "react";
import {getEvents} from './redux/actionCreators';
import { connect } from 'react-redux';
import EventIndex from './containers/EventIndex';
import SearchResults from './containers/SearchResults';
import UserProfile from './containers/UserProfile';
import SearchBar from './components/SearchBar';
import MyProfile from './components/MyProfile';
import FilterEvents from './components/FilterEvents';
import useFetch from "./hooks/useFetch";
// import EventSearchResults from './containers/EventIndex';
import EventCard from "./components/EventCard";
import Login from "./components/Login";
// import Auth from "./components/Auth";
import EventCardSearch from "./components/EventCardSearch";
import Nav from "./components/Nav";
import EventShow from "./components/EventShow";
import { Routes, Route, useParams } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import Signup from './components/Signup';
import { BrowserRouter as Router } from "react-router-dom";
import { autoLogin } from './redux/actionCreators'
import store from './store'




// import { EventIndex, Search} from './components'



function App({user, autoLogin}) {

  
  // 
  
  


// const query = new URLSearchParams(search).get('input');
// const [searchQuery, setSearchQuery] = useState(query || '');
// const FilteredEvents = FilterEvents(getEvents, events, query)
// const { data, setData } = useFetch();

useEffect(() => localStorage.token && autoLogin(), [autoLogin])

  return (
<>
  
<div className="App">
       <header className="App-header">

    
       <h1> Events Meetup!</h1>

       <Nav/>

    <SearchBar/>
      

         <img src={logo} className="App-logo" alt="logo" />

         { 
       
      <Routes>
     
       <Route path="events" >
        <Route path=":eventId" element={<EventShow />}/> </Route>
         
      
        <Route path="login" element={<Login />}/>
        <Route path="signup" element={<Signup />}/>
        <Route path="index" element={<EventIndex />}/> 
        <Route path="myprofile" element={<MyProfile />}/> 

        </Routes>

      
         }

        </header>
</div>
    
    </>
  );
};

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, {autoLogin})(App);

   {/* <Route path="users" >
        <Route path=":userId" element={<UserProfile />}/>
         </Route>
          */}



  {/* <Route path="results" >
        <Route path=":searchQuery" element={<SearchResults />}/>
         </Route>
         */}
      
        {/* <Route path="?results=:searchQuery"  element={<SearchResults />}/> */}
        {/* <Route path=":searchQuery" element={<SearchResults />}/>
        </Route>
     */}

{/* <Route path="results" >
        <Route path=":performer_name" element={<SearchResults />}/>
         </Route>
       
       </Routes>
    
       <Outlet />
       */}

        {/* <div className="Search">
        <input
        type="results"
        placeholder="Search for artist"
        value={data.slug}
        onChange={(e) => setData({ ...data, slug: e.target.value })}
        />
        <br />
        {data.results.length > 0 ? <EventCardSearch events={data.results[0]} /> : null}
      </div> */}

      
       

         {/* <Auth/> */}

       

       
         {/* <ul>
                {filteredEvents.map(event => (
                    <li key={event.key}>{event.name}</li>
                ))}
            </ul>
      
        */}
       {/* <EventIndex/>
        */}
       {/* element={<Team />} */}
       
       {/* <Switch>
        <Route path="/events/:id"><EventShow/></Route>
        <Route path="/events"><EventIndex/></Route>
      </Switch> */}

{/* <Route path="teams/:teamId" element={<Team />} /> */}

{}