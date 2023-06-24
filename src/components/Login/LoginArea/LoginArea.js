import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginArea = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here with email and password

    const handleLogin = async () => {
        try {
          const response = await axios.post('http://localhost:5000/api/user/login', { email, password });
          console.log(response.data); 
          
          navigate("/userlandingpage")
          // Success message
          // Handle successful login, such as redirecting to a different page
        } catch (error) {
          if (error.response && error.response.data && error.response.data.message) {
            setErrorMessage(error.response.data.message);
          } else {
            setErrorMessage('An error occurred during login.');
          }
        }
      };

      handleLogin();

    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form
    setEmail('');
    setPassword('');
  };

  return (
    <div style={containerStyle}>
      <h2>Login</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  border: '5px'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
};

const buttonStyle = {
  backgroundColor: '#f2f2f2',
  color: '#333',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  marginTop: '20px',
  cursor: 'pointer',
};

export default LoginArea;
