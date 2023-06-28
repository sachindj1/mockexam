import React from 'react'
import Navbar from '../Navbar/Navbar'
import ResultPageArea from './ResultPageArea/ResultPageArea'
import Footer from '../Footer/Footer'
import { useLocation } from 'react-router-dom'

function ResultPage() {

  const location = useLocation();

  const result = location.state;

  console.log("submited result >>>>",result);
  return (
    <div>
    <Navbar />
    <ResultPageArea Result={result}/>
    <Footer />



    </div>
  )
}

export default ResultPage