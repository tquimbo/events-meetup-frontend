import { useState } from 'react'
// import { submitSignup, submitLogin } from '../redux/actionCreators'
import { connect } from 'react-redux'
import { submitSignup, submitLogin } from '../redux/actionCreators'


function Signup(props){

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")




  const handleSubmit = (e) => {
    e.preventDefault()
    props.submitSignup({username, password, first_name, last_name })
  }

  return <>
    <form onSubmit={handleSubmit} >

    <label>
  
        <input type="text" placeholder="First_name"  name="first_name" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
    </label>


    <label>
    
        <input type="text" placeholder="Last_name"  name="last_name" value={last_name} onChange={(e) => setLastName(e.target.value)} />
    </label>


      <label>
    
        <input type="text" placeholder="Username"  name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      

      <label>
  
        <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </>
}




export default connect(null, { submitSignup})(Signup);
