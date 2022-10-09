import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Donate from './components/Donate';

function App() {
  return (
    <React.Fragment>
      <div className='App'>
        <Home/>
        <About/>
        <Contact/>
        <Donate/>
      </div>
    </React.Fragment>
  );
}

export default App;
