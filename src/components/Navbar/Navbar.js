import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
   // const [showLogOut , setShowLogOut] = useState('false');

const navigate = useNavigate();


function handleHome(){
    navigate("/");
}

const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem('username');
    localStorage.removeItem('userID');


    // Perform any additional cleanup or redirection as needed
    // For example, you can redirect the user to the login page
    navigate("/");
  };

  const user = localStorage.getItem('username');


  return (
    <div style={navbarStyle}>
      <div style={logoStyle} onClick={handleHome}>Logo</div>
      {user &&<button style={logoutButtonStyle} onClick={handleLogout}>Logout</button>}
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
