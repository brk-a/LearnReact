import React from 'react'
import './App.css';
import CreateEmployee from './components/CreateEmployee';
import ReadEmployee from './components/ReadEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="main">
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

        <Routes><Route path='/update' element={<UpdateEmployee/>} /></Routes>
      </div>
    </Router>
  );
}


// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import './App.css'
// import CreateEmployee from './components/CreateEmployee'
// import UpdateEmployee from './components/UpdateEmployee'
// import ReadEmployee from './components/ReadEmployee'

// function App() {
//   return (
//     <Router>
//       <div className="main">
//         <h2 className="main-header">React CRUD Ops</h2>
//         {/* <div>
//           <Routes>
//             <Route index component={CreateEmployee} />
//           </Routes>
//         </div> */}
//         <div>
//           <Routes>
//             <Route exact path='/create' component={CreateEmployee} />
//           </Routes> 
//         </div>
//         <div style={{ marginTop: 20 }}>
//         <Routes>
//          <Route exact path='/read' component={ReadEmployee} />
//         </Routes>
//         </div>
//         <Routes>
//           <Route path='/update' component={UpdateEmployee} />
//         </Routes>
//       </div>
//     </Router>

//   )
// }



export default App
