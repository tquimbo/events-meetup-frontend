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
import { useHistory } from '../redux/actionCreators';
import { BrowserRouter as Router } from "react-router-dom";

function SearchBar({ searchQuery, setSearchQuery, getSearchResults }) {

    return (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden"></span>
        </label>
        <input
            value={searchQuery}
            handleinput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search an artist"
            name="results"
            // onClick={this.handleinput}
        />
        <button type="submit">Search</button>
    </form>
    )

    
}

    // useEffect(() => {
    //     getSearchResults(searchQuery)
    //   }, [getSearchResults, searchQuery])

    



const mapStateToProps = (state) => {
    return {...state.selectedEvent}
}

// export default EventShow

export default connect(mapStateToProps, {getSearchResults})(SearchBar);