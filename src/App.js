import logo from './logo.svg';
import concert from './concert.jpg';
import './App.css';
import { useEffect } from "react";
import { useState } from "react";
import {getEvents} from './redux/actionCreators.ts';
import { connect } from 'react-redux';
import EventIndex from './containers/EventIndex';
import Test from './containers/Test';
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
import SearchShow from "./components/SearchShow";
import { Routes, Route, useParams } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import Signup from './components/Signup';
import { BrowserRouter as Router } from "react-router-dom";
import { autoLogin } from './redux/actionCreators.ts'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';





function App({user, autoLogin}) {

  


// const query = new URLSearchParams(search).get('input');
// const [searchQuery, setSearchQuery] = useState(query || '');
// const FilteredEvents = FilterEvents(getEvents, events, query)
// const { data, setData } = useFetch();

useEffect(() => localStorage.token && autoLogin(), [autoLogin])

  return (
<>
  
<div className="App">
       <header className="App-header">

    
       <h1> Concert Buddy</h1>

       <img src={concert} className="App-logo" alt="logo" />

       <Nav/>

    <SearchBar/>
      

      

       
      <Routes>
     
       <Route path="events" >
        <Route path=":eventId" element={<EventShow />}/> 
        </Route>

        <Route path="myprofile" >
        <Route path=":username" element={<MyProfile />}/> 
        </Route>
{/* 
        <Route path="search?:searchQuery" element={<SearchResults />} /> */}
        {/* <Route path=":searchQuery" element={<SearchResults />}/>  */}
        {/* </Route> */}

         
         
        {/* <Route path="search?:searchQuery" element={<SearchResults />} /> */}

            
        {/* <Route path="search" element={<SearchResults />} /> */}
        <Route path="search" element={<SearchResults />} >
        <Route path=":searchId" element={<SearchShow />}/> 
        </Route>
      
      
        <Route path="login" element={<Login />}/>
        <Route path="signup" element={<Signup />}/>
        <Route path="index" element={<EventIndex />}/> 
        {/* <Route path="myprofile" element={<MyProfile />}/>  */}

        </Routes>

<Outlet />
    
        </header>
</div>
    
    </>
  );
};

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, {autoLogin})(App);

 