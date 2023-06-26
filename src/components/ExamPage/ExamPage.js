import React ,{useState , useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import ExamPageArea from './ExamPageArea/ExamPageArea'
import Footer from '../Footer/Footer'
import { useLocation } from 'react-router-dom'

function ExamPage() {

    const location = useLocation();
    const {subjectID} = location.state;

      useEffect(()=>{
        console.log("passed data >>",subjectID);

      } ,[subjectID])

   
  return (
    <div>
     <Navbar />
     <ExamPageArea subjectID={subjectID} />
     <Footer />


    </div>
  )
}

export default ExamPage