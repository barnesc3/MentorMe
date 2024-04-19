import Navbar from "../components/Navbar";
import React, { useState } from 'react'
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
        <Navbar/>
      <h1 style={{marginTop: "150px"}}>Login</h1>
      <form onSubmit={handleSubmit} className='login-form' style={{padding: "10px"}}>
        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{margin: "10px", fontSize: "15px"}}
        />
        <input
          type="password"
          placeholder="Your Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{margin: "10px", fontSize: "15px"}}
        />
        <button type="submit" className='login-button' style={{marginLeft: "10px"}}>Login</button>
      </form>
      <p>Need to Signup? <Link to="/signup">Create Account</Link></p>
    </div>
  )
}

export default Login
