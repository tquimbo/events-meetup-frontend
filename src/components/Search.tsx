import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
//import { fetchSearchResults } from '../store/actions/searchActions';
import { Form, Button, InputGroup } from 'react-bootstrap';
import useFetch from "../hooks/useFetch";
import EventIndex from '../containers/EventIndex';
import EventCard from "./EventCard"
import EventCardSearch from "./EventCardSearch"
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEvent } from '../redux/actionCreators.ts';
import { Link, Outlet} from 'react-router';
import { useEffect } from 'react';
import { getSearchResults } from '../redux/actionCreators.ts';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Login from "../components/Login";
import Results from './components/Results';



const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query.trim()) {
      dispatch(fetchSearchResults(query));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Search for concerts"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <InputGroup.Append>
          <Button type="submit">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

export default Search;
