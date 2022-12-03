import { useState } from "react";

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const submit = () => {
    console.log(props.getData)
    props.getData.map((e)=>{
      return  e.username === username ? alert('exist') : alert('not exist')
    })
  }
  return (

    <div>
      <input type="text" name="username" value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder='User Name' />
      <input type="password" name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />
      <button onClick={submit}>Login</button>
    </div>
  )
}

export default Login
