import {useEffect} from "react"
import {getEvents} from '../redux/actionCreators'
import { connect } from 'react-redux'

const FilterEvents = (events, query) => {
    debugger
    if (!query) {
        return events;
    }

    return events.filter((event) => {
        const eventName = event.name.toLowerCase();
        return eventName.includes(query);
    });
};

export default FilterEvents;