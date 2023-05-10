// import { NavLink } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { logout } from '../redux/actionCreators.ts'


// function Nav(props){

//   return <nav>
//    <NavLink to="/index"> See all events </NavLink> |
//    <NavLink to="/login"> Login </NavLink> |
//    <NavLink to="/signup"> Signup </NavLink> |
//    <NavLink to="/myprofile"> My Profile </NavLink> |
//    <button onClick={logout}>Logout!</button>
//   </nav>

// }

// export default Nav

   
// import { NavLink } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { logout } from '../redux/actionCreators'
// import { useNavigate } from 'react-router-dom'

// function Nav({logout, username, user}){
//   // if we're logged in, show the traditional nav
//   // if we're not logged in, show something else
//   // to do that, see if we have a user

  
//   let navigate = useNavigate();

//   const handleClick = (e) => {
//     navigate("/index", { replace: true });
//     e.preventDefault()
//     logout(e)
//   }

//   const loggedInRender = () => <nav>
//       <NavLink to="/index"> See all events </NavLink> |
//       <NavLink to="/login"> Login </NavLink> |
//       <NavLink to="/signup"> Signup </NavLink> |
//       <NavLink to={`/myprofile/${username}`}> My Profile </NavLink> |
//       <button onClick={handleClick}>Logout!</button>
//   </nav>

//   const loggedOutRender = () => <nav> 
//   <NavLink to="/index"> See all events </NavLink> |
//   <NavLink to="/login"> Login </NavLink> |
//   <NavLink to="/signup"> Signup </NavLink> |</nav>

//   return username ? loggedInRender() : loggedOutRender()
// }

// const mapStateToProps = (state) => ({username: state.user.username,
//   user: state.user})

// export default connect(mapStateToProps, {logout})(Nav);
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../redux/actionCreators.ts';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation({ logout, username, user }) {
  let navigate = useNavigate();

  const handleClick = (e) => {
    navigate('/index', { replace: true });
    e.preventDefault();
    logout(e);
  };

  const linkStyle = {
    color: 'white',
  };

  const loggedInRender = () => (
    <Navbar variant="dark" expand="lg">
      <Navbar.Brand href="/index">My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="nav-link" to="/index" style={linkStyle}>
            See all events
          </NavLink>
          {/* <NavLink
            className="nav-link"
            to={`/myprofile/${username}`}
            style={linkStyle}
          >
            My Profile
          </NavLink> */}
             <NavLink
            className="nav-link"
            to={`/users/${user.id}`}
            style={linkStyle}
          >
            My Profile
          </NavLink>
        </Nav>
        <Nav>
          <button className="btn btn-outline-danger" onClick={handleClick} style={linkStyle}>
            Logout
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

  const loggedOutRender = () => (
    <Navbar variant="dark" expand="lg">
      <Navbar.Brand href="/index">My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="nav-link" to="/index" style={linkStyle}>
            See all events
          </NavLink>
        </Nav>
        <Nav>
          <NavLink className="nav-link" to="/login" style={linkStyle}>
            Login
          </NavLink>
          <NavLink className="nav-link" to="/signup" style={linkStyle}>
            Signup
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

  return username ? loggedInRender() : loggedOutRender();
}

const mapStateToProps = (state) => ({
  username: state.user.username,
  user: state.user,
});

export default connect(mapStateToProps, { logout })(Navigation);