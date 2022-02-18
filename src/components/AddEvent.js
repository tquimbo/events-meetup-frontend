import {connect} from 'react-redux'

export default function AddEvent(props)
{
    return (
        <div className="attending_status">

        <button  onClick={props.attending}> Atttending </button>
        <button  onClick={props.maybe}> Maybe </button>

        </div>
        
    
    )
}

// const mapStateToProps = (state) => ({})
// function connect