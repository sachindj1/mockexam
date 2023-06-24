import React ,{useState , useEffect}from 'react'
import { useNavigate } from 'react-router-dom';

function HomeArea() {
     const [userName , setUserName]= useState('')


    const navigate = useNavigate();
    const user = localStorage.getItem('username');
    const userIDD = localStorage.getItem('userID' );

    const handleRegister =()=>{
        navigate('/register')
    }

    const handleLogin =()=>{
        navigate('/login')
    }
    const handleUserLandingPage =()=>{
        navigate('/userlandingpage')
    }

    //    if(userIDD === null){
    //     return ;
    //    }


      useEffect(()=>{
          const fetchUserData = async()=>{
                  const userID = userIDD ;
              try{
                  const response = await fetch(`http://localhost:5000/api/get/userdata/${userID}`);
                  const data = await response.json();
                  console.log(data.result[0].user_name);
                  setUserName(data.result[0].user_name);


              }catch (err){
                console.log("error in fetching data", err)

              }}
              fetchUserData();

      }, [])

    


    return (
        <>
        {user ? ( <div style={containerStyle}>
          <h1>Welcome {userName}</h1> 
          <div style={buttonContainerStyle}>
             <button style={buttonStyle} onClick={handleUserLandingPage}>Select course</button>
          </div>
          </div>) : (

              <div style={containerStyle}>
              <h1>Welcome to the Home Page</h1>
              <div style={buttonContainerStyle}>
             <button style={buttonStyle} onClick={handleRegister}>Register</button>
              <button style={buttonStyle}  onClick={handleLogin}>Login</button> 
</div>
</div>

          )}
       


        </>
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