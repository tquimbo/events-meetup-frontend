import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'


function Nav(){

  return <nav>
   <NavLink to="/index"> See all events </NavLink>
  </nav>

}

export default Nav