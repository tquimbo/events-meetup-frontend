import { Link, Outlet } from 'react-router-dom'


export default function UserCard({username, first_name, last_name, submitLogin, submitSignup, getUser}){
  


  return (<div className="user_cards">
 
<Link to={`/users/${id}`}><h3>{username}</h3></Link> 

{/* <h3>{performer_name}</h3> */}
    {/* <p>{venue_name}</p>
    <p>{venue_address}</p> */}
    {/* <p>{datetime}</p> */}
  </div>);

}