import React , {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function ExamPageArea({subjectID}) {
     const [subDetails , setSubDetails] = useState([]);

     const navigate = useNavigate()

    const subjectIDD = subjectID;

    console.log("this is subject id on exam page area >>>>" ,subjectIDD)

        useEffect(()=>{

             const fetchSubject = async()=>{

                 try{
                    const response = await fetch(`http://localhost:5000/api/get/subject/${subjectIDD}`)
                    const data = await  response.json();
                    console.log(data.result);
                    setSubDetails(data.result[0].description);
                 }
                 catch (err){

                    console.log("error in getting data " , err);



                 }
           }
           fetchSubject();

        },[])

        function handleExam (){
            navigate("/startedexam" , {state : {subjectIDD}})
        }


  return (
    <div style={containerStyle}>
    {subDetails ? (<><h2 style={{textAlign : 'center'}}>Exam Details</h2>
    <h2 style={{textAlign : 'center'}}> {subDetails}
                                   </h2>
     <button style={buttonStyle} onClick={handleExam}>Start Exam</button>
     </>) : (<><h2 style={{textAlign : 'center'}}>Exam Details</h2></>)}
    </div>
  )
}


const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#87CEEB',
  };
  
  const buttonStyle = {
    backgroundColor: 'green',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

export default ExamPageArea