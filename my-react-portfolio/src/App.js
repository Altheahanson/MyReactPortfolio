// import Navigation from './components/Navigation';
// import Header from './components/Header';
// function App() {
//     return <div>
//       <Navigation/>
//       <Header/>
//   </div>
// }
// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/Pages/About';
import Projects from './components/Pages/Projects';
import Contact from './components/Pages/Contact';
import Resume from './components/Pages/Resume';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navigation/>
        <Routes>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
export default App;