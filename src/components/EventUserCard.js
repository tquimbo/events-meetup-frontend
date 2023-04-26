import { Link, Outlet } from 'react-router-dom'


export default function EventUserCard(props){
  


  return (<div className="event_users_cards">
 

      <p>
        {props.users.firstName} {props.users.lastName}
      </p>

   
  </div>);

}



   