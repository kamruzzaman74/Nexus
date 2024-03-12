import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About';
import Contact from './Components/Contact';
import Fin from './Components/Fin';
import Tax from './Components/Tax';
import All from './Components/All';
import Bus from './Components/Bus';
import Payr from './Components/Payr';
import Ind from './Components/Ind';
function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fin" element={<Fin  />} />
        <Route path="/tax" element={<Tax />} />
        <Route path="/all" element={<All/>} />
        <Route path="/bus" element={<Bus/>} />
        <Route path="/payr" element={<Payr/>} />
        <Route path="/ind" element={<Ind/>} />
          
      </Routes>
    </div>
  </Router>
);
}
  

export default App
