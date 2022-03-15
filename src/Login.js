import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = event=> {
    event.preventDefault(); //used to stop the refresh
    
    //login logic
    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in, redirect to homepage...
        history.push('/');
      })
      .catch((e) => alert(e.message))
  }

  const register = event=> {
    event.preventDefault(); //used to stop the refresh
    
    //registeration login
    auth.createUserWithEmailAndPassword(email, password)
    .then(auth => {
      //created a user and logged in, redirected to homepage
      history.push('/');
    })
    .catch((e) =>alert(e.message));
    
  }

  return (
    <div className="login">
      <Link to="/">
        <img 
          className='login__logo' 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
         />
        
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input value={email} onChange={event => setEmail(event.target.value)} type="text" />
          <h5>Password</h5>
          <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
          <button onClick={login} type="submit" >Sign-In</button>
        </form>

        <p className='login__checkbox'>
          <input type='checkbox' />
          Keep me signed in.
        </p>
        
        <p className='login__disclaimer'>
        By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>

        <button onClick={register} className='registerButton'>Create your Amazon Account</button>

      </div>

    </div>
  )
}

export default Login