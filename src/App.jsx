
import './App.css';
import Navbar from './layout/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignIn from './Auth/SignIn'
import SignUp from './Auth/SignUp'
import Home from './pages/Home'



function App() {
 
  return (
    <>
     
      <BrowserRouter>
      <Routes>
        <Route element = {<Navbar/>}>
          <Route path = "/" element = {<Home/>}/>
        </Route>
        <Route path = "/auth/signin" element = {<SignIn/>}/>
        <Route path = "/auth/signup" element = {<SignUp/>}/>
      </Routes>    
      </BrowserRouter>
    </>
  )
}

export default App
