import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./SignInPage.css"; // Your external CSS file

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3005/api/v1/users/signin', {
        email,
        password,
      });

      const token = response.data.token;

      // Store the token in local storage
      localStorage.setItem('authToken', token);

      console.log('Login successful!');
      navigate('/'); // Redirect to home page after successful sign-in

    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid email or password. Please try again.'); // Set error message
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-body">
        <form className="signin-form" onSubmit={handleLogin}>
          <h1>Login To have Access to watch movies</h1>
          {error && <div className="error-message">{error}</div>} {/* Display error message */}
          <input
            type="email"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="signin-button" type="submit">Sign In</button>
          <div className="signin-help">
            <div>
              <input type="checkbox" /> Remember me
            </div>
            <div className="help-text">Need help?</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
