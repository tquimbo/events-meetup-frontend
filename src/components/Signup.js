import { useState } from 'react'
// import { submitSignup, submitLogin } from '../redux/actionCreators'
import { connect } from 'react-redux'
import { submitSignup, submitLogin } from '../redux/actionCreators'


function Signup(props){

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    props.submitSignup({username, password})
  }

  return <>
    <form onSubmit={handleSubmit} >

      <label>
        Username:
        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      

      <label>
        Password:
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </>
}




export default connect(null, { submitSignup})(Signup);
