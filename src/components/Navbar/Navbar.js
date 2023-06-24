import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

const navigate = useNavigate();

function handleHome(){
    navigate("/");
}

  return (
    <div style={navbarStyle}>
      <div style={logoStyle} onClick={handleHome}>Logo</div>
      <button style={logoutButtonStyle}>Logout</button>
    </div>
  );
};

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#f2f2f2',
  padding: '10px',
};

const logoStyle = {
  fontWeight: 'bold',
  fontSize: '20px',
};

const logoutButtonStyle = {
  backgroundColor: '#e74c3c',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  padding: '8px 16px',
  cursor: 'pointer',
};

export default Navbar;
