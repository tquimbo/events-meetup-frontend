import {connect} from 'react-redux'

export default function AddEvent(props)


// const [attending, setAttending] = useState("")
// const [maybe_attending, setMaybeAttending] = useState("")

{
    return (
        <div className="Atttendance Button">

        <button  onClick={props.attending}> Atttending </button>
        <button  onClick={props.maybe_attending}> Maybe </button>

        </div>
        
    
    )
}

// const mapStateToProps = (state) => ({})
// function connect