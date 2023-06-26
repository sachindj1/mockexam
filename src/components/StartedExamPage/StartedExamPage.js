import React from 'react'
import Navbar from '../Navbar/Navbar'
import StartedExamPageArea from './StartedExamPageArea/StartedExamPageArea'
import Footer from '../Footer/Footer'
import { useLocation } from 'react-router-dom'

function StartedExamPage() {

    const location = useLocation();

    const subjectIDD = location.state.subjectIDD ;

    console.log("1>>>>>", subjectIDD)
  return (
    <div>
     <Navbar />
     <StartedExamPageArea subjectid={location.state.subjectIDD}/>
     <Footer />

    </div>
  )
}

export default StartedExamPage