import React ,{useEffect , useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserLandingPageArea() {
   
    const [subjects , setSubjects] = useState([]);






    const navigate = useNavigate();

    function handlSubject(subjectID){
        
        navigate('/exampage', {state : {subjectID }})
    }
     
   

    // fetch list of subjects from backend


    useEffect(()=>{
             
        const fetchSubjects = async()=>{

            try{
                const response = await fetch("http://localhost:5000/api/get/subjects");
                const data = await response.json();
                console.log(data.result);
                setSubjects(data.result);
            }
            catch (err){
                console.log("error in getting subjects " , err);

               

            }
        }

        fetchSubjects();

    } ,[])


 


  return (
    <div>

      <div style={{containerStyle}}>Select Subject
       <div style={{buttonContainerStyle}}>
       {subjects.map((subject) => (
            <button
              key={subject.subject_id}
              style={buttonStyle}
              onClick={() => handlSubject(subject.subject_id)}
            >
              {subject.subject_name}
            </button>
          ))}
       
       </div>

       </div>
    </div>
  )
}

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
   // backgroundColor: '#f2f2f2',
    color: '#333',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    marginRight: '10px',
    cursor: 'pointer',
    innerWidth : '100px'
  };

export default UserLandingPageArea