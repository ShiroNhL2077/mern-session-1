import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Admin from './components/Admin'
import { addBackToTop } from 'vanilla-back-to-top'
addBackToTop()

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/admin' element={<Admin />} />
      </Routes>
    </Router>
  )
}
