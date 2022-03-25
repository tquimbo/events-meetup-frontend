import useFetch from "../hooks/useFetch";
import EventIndex from '../containers/EventIndex';
import EventCard from "./EventCard"
import EventCardSearch from "./EventCardSearch"
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEvent } from '../redux/actionCreators';
import { Link, Outlet} from 'react-router';
import { useEffect } from 'react';
import { getSearchResults } from '../redux/actionCreators';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Login from "../components/Login";
import { useState } from 'react'

function SearchBar(props) {

    let navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState("")
    // useEffect(() => {
    //     getSearchResults(searchQuery)
    //   }, [getSearchResults, searchQuery])

    // const navigate = useNavigate();
    const onSubmit = e => {
        // navigate.push(`?results=${searchQuery}`)
        navigate(`/search_results/${searchQuery}`, { replace: true })
        e.preventDefault()
        props.getSearchResults(searchQuery)
        // navigate(`/results/${searchQuery}`, { replace: true });
    
 
    };

    return (

        <div>
    <form action="/" method="post" autoComplete="off" onSubmit={onSubmit}>
        <label htmlFor="header-search">
            <span className="visually-hidden"></span>
        </label>
        <input
            value={props.searchQuery}
            // handleinput={e => setSearchQuery(e.target.value)}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search an artist"
            name="results"
            // onSubmit={this.handleinput}
        />
        <button type="submit">Search</button>
    </form>


</div>

    )

    
}

    // useEffect(() => {
    //     getSearchResults(searchQuery)
    //   }, [getSearchResults, searchQuery])

    



const mapStateToProps = (state) => {
    return {events: state.events}
}

// export default EventShow

export default connect(null, {getSearchResults})(SearchBar);