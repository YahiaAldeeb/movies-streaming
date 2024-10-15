import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import axios from 'axios';
import './SignUp.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setError("Passwords don't match!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3005/api/v1/users', {
        name: username,
        email,
        password,
        passwordConfirm
      });

      // Assuming successful sign up redirects to home
      if (response.status === 201) {
        navigate('/login'); // Redirect to the home page
      }
    } catch (err) {
      setError('Error during sign up: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-gradient">
        <div className="signup-container">
          <h1 style={{ color: 'white' }}>Sign Up</h1>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="input"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              required
              className="input"
            />
            <button type="submit" className="signup-button">Sign Up</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
          <p style={{ color: 'white' }}>
            Already have an account? 
            <Link to="/login" style={{ color: 'blue', textDecoration: 'underline' }}> Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
