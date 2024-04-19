import React, { useState } from 'react'
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Signup = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [biography, setBiography] = useState('');
  const [accountType, setType] = useState('');
  const [location, setLocation] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));

      axios.post('http://localhost:3001/register', {email, password, biography, accountType, location})
      .then(result => console.log(result))
      .catch(err => console.log(err))

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
        <Navbar/>
      <h1 style={{marginTop: "150px", marginBottom: "10px"}}>Sign Up</h1>
      <form onSubmit={handleSubmit} className='signup-form' style={{display: "inline-grid", gridTemplateColumns: "100px 500px", gridTemplateRows: "50px 50px 50px 50px", rowGap: "10px"}}>
        Email:<input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{marginBottom: "10px", fontSize: "15px"}}
        />
        Password:<input
          type="password"
          placeholder="Your Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{marginBottom: "10px", fontSize: "15px"}}
        />
        Biography:<input
          type="biography"
          placeholder="Your Biography"
          required
          value={biography}
          onChange={(e) => setBiography(e.target.value)}
          style={{marginBottom: "10px", fontSize: "15px"}}
        />
       Location:<input
          type="location"
          placeholder="Your Location"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{marginBottom: "10px", fontSize: "15px"}}
        />
        <label htmlFor="type">Choose Account Type:</label>
        <select id="type" value={accountType} onChange={(e) => setType(e.target.value)} style={{margin: "5px", fontSize: "15px"}} >
            <option value="Mentor" >Mentor</option>
            <option value="Mentee" >Mentee</option>
        </select>
        <button type="submit" className='signup-button' onClick={handleSubmit} style={{marginLeft: "200px", width: "200px"}}>Sign Up</button>
      </form>
      <p style={{margin: "15px"}}>Need to Login? <Link to="/login">Login</Link></p>
    </div>
  )
}

export default Signup