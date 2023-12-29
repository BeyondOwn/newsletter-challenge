import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Succes from './Succes';
import Home from './Home';

function App() {
  
  return (
    
    <Routes>
     
     <Route path="*" element={<Home/>} exact />
     <Route path="/succes" element={<Succes/>} exact />
     
     </Routes>
    
    
  )
}

export default App
