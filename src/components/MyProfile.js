import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEvent } from '../redux/actionCreators';
import { Link, Outlet} from 'react-router';
import { useEffect } from 'react';
import EventCard from "../components/EventCard";

export default function MyProfile(props){

    return (<div className="myprofile">

    <h1> Hi </h1>
    
   </div>
    )
  
};


