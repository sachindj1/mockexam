import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={textStyle}>© 2023 Your Company. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#f2f2f2',
  padding: '10px',
  textAlign: 'center',
};

const textStyle = {
  fontSize: '14px',
  color: '#888',
};

export default Footer;
