import {Redirect} from 'react-router-dom'
import Login from '../components/Login'

function LoginPage() {
  if(false) {return <Redirect to='/' />}
  return <Login/>
}

export default LoginPage