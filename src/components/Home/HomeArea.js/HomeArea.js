import React from 'react'
import { useNavigate } from 'react-router-dom';

function HomeArea() {

    const navigate = useNavigate();

    const handleRegister =()=>{
        navigate('/register')
    }

    const handleLogin =()=>{
        navigate('/login')
    }

    return (
        <div style={containerStyle}>
          <h1>Welcome to the Home Page</h1>
          <div style={buttonContainerStyle}>
            <button style={buttonStyle} onClick={handleRegister}>Register</button>
            <button style={buttonStyle}  onClick={handleLogin}>Login</button>
          </div>
        </div>
      );
    };
    
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    };
    
    const buttonContainerStyle = {
      marginTop: '20px',
    };
    
    const buttonStyle = {
      backgroundColor: '#f2f2f2',
      color: '#333',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      marginRight: '10px',
      cursor: 'pointer',
    };
export default HomeArea