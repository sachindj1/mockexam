
import {Routes , Route , Link} from 'react-router-dom'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import UserLandingPage from './components/UserLandingPage/UserLandingPage';
import ExamPage from './components/ExamPage/ExamPage';
import ResultPage from './components/ResultPage/ResultPage';

function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/login' element={ <Login />} />
      <Route path='/register' element={ <Register />} />
      <Route path='/userlandingpage' element={ <UserLandingPage />} />
      <Route path='/exampage' element={ <ExamPage />} />
      <Route path='/resultpage' element={ <ResultPage />} />
    </Routes>
   </>
  );
}

export default App;
