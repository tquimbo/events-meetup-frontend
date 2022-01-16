import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getEvent } from '../redux/actionCreators'
import { Link} from 'react-router'
import { useEffect } from 'react'

function EventShow(getEvent, performer_name,venue_name, venue_address, datetime ){

    const routeId = useParams().id

    useEffect(() => {
        getEvent(routeId)
      }, [getEvent, routeId]);
    
   
      return <div className="show">
         
   <h1>{performer_name}</h1>
    {/* <img src={imageUrl} alt={venue_name}/> */}
    <p>{venue_name}</p>
    <p>{venue_address}</p>
    <p>{datetime}</p>
    <p> "Hi" </p>
  </div>
}

const mapStateToProps = (state) => {
        return {...state.selectedEvent}
      }



// export default EventShow;

export default connect(mapStateToProps, {getEvent})(EventShow);