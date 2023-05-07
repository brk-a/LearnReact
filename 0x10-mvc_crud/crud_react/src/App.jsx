import React from 'react'
import './App.css';
import CreateEmployee from './components/CreateEmployee';
import ReadEmployee from './components/ReadEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="main">
        <Navbar/>
        <h2 className="main-header">React CRUD Ops</h2>
        <div>
          <Routes><Route exact path='/' element={<CreateEmployee/>} /></Routes>
        </div>
        <div>
          <Routes><Route exact path='/create' element={<CreateEmployee/>} /></Routes>
        </div>
        <div style={{ marginTop: 20 }}>
          <Routes><Route exact path='/read' element={<ReadEmployee/>} /></Routes>
        </div>

        <Routes><Route exact path='/update' element={<UpdateEmployee/>} /></Routes>
      </div>
    </Router>
  );
}

export default App
