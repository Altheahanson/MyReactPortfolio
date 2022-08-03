
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  return (
    <div>
    <Router>
       <CssBaseline />
      
        <Header />
        <Navigation/>
        <Routes>
          <Route path='/' element={<About />} ></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
        </Routes>
     <Footer />
    </Router>
    
    </div>
  )
}
export default App;