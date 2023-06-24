import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const  RegisterArea = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
    
   function handleHome (){
    navigate("/")
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
      
             
        const insertData = async ()=>{
             try{
               
                const response = await axios.post("http://localhost:5000/api/register" ,{
                    user_name : name ,
                    password : password,
                    email : email
                })

                console.log(response.data);
                if(response.data){
                    navigate('/login');
                }

             }catch(err){
                     console.log("error in fetching inserting user" , err)

             }
        }
        insertData();

      

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div style={containerStyle}>
      <h2>Registration</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
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
        <button type="submit" style={buttonStyle}>Register</button>
        <button  style={buttonStyle} onClick={handleHome}>Home</button>
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

export default RegisterArea;
