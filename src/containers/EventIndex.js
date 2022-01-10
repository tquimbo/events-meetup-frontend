import {useEffect} from 'react'
import {getEvents} from '../redux/actionCreators'
import { connect } from 'react-redux'

function EventIndex({getEvents, events}){

  useEffect(getEvents, [getEvents])

    return <form> Search by artist, event, team, or venue </form>
}

export default connect(null, { getEvents })(EventIndex)