import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {Contact} from './pages/Contact';
import {About} from './pages/About';
import {Service} from './pages/Service';
import {Register} from './pages/Register';
import {Login} from './pages/Login';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { Error } from './pages/Error';
import { Logout } from './pages/Logout';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<Error/>}/>
          <Route path='/logout' element={<Logout/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
};

export default App