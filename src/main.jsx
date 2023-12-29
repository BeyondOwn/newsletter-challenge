import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Succes from './Succes.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Router>
    <App/>
  </Router>
  
)