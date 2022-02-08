import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'


function Nav(){

  return <nav>
   <NavLink to="/index"> See all events </NavLink> |
   <NavLink to="/login"> Login </NavLink> |
   <NavLink to="/signup"> Signup </NavLink> |
   <NavLink to="/myprofile"> My Profile </NavLink> |
  </nav>

}

export default Nav