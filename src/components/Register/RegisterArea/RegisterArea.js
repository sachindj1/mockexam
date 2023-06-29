import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterArea = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleHome() {
    navigate('/');
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here with name, email, and password

    const insertData = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/register', {
          user_name: name,
          password: password,
          email: email,
        });

        console.log(response.data);
        if (response.data) {
          navigate('/login');
        }
      } catch (err) {
        console.log('error in fetching inserting user', err);
      }
    };
    insertData();

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form
    setName('');
    setEmail('');
    setPassword('');
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    backgroundColor: '#87CEEB',
   
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  };

  const labelStyle = {
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px',
    width: '300px',
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

  return (
    <div style={containerStyle}>
      <div style={{ width: '100%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{textAlign:"center"}}>Registration</h2>

        <form style={formStyle} onSubmit={handleSubmit}>
          <div>
            <label style={labelStyle}>Name:</label>
            <input
              style={inputStyle}
              type="text"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div>
            <label style={labelStyle}>Email:</label>
            <input
              style={inputStyle}
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label style={labelStyle}>Password:</label>
            <input
              style={inputStyle}
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Register
          </button>
          <button style={buttonStyle} onClick={handleHome}>
            Home
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterArea;
