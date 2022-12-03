import { useState } from 'react';
import { Link } from 'react-router-dom';
const Signup = (props) => {
  const [user, setUser] = useState({ firstname: '', lastname: '', username: '', password: '' });


  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }


  const submit = () => {
    props.getData(user)
  }
  return (
    <div>
      <input type="text" name="firstname" value={user.firstname} placeholder='First Name' onChange={handleChange} />
      <input type="text" name='lastname' value={user.lastname} placeholder='Last Name' onChange={handleChange} />
      <input type="text" name="username" value={user.username} placeholder='User Name' onChange={handleChange} />
      <input type="password" name='password' value={user.password} placeholder='Password' onChange={handleChange} />
      <button onClick={submit}><Link to="/login">Signup</Link></button>
    </div>
  )
}

export default Signup
