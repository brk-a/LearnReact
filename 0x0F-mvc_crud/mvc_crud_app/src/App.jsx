import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Nav, Navbar, Container, Row, Col} from 'react-bootstrap'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import {Route, Switch} from 'react-dom'
import CreateStudent from './components/CreateStudent'
import EditStudent from './components/EditStudent'
import StudentList from './components/StudentList'

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Navbar bg='dark' variant='dark'>
            <Container>
              <Navbar.Brand>
                <Link to={'/create-student'} className='nav-link'>
                  React MVC CRUD
                </Link>
              </Navbar.Brand>
              <Nav className='justify-content-end'>
                <Nav>
                  <Link to={'/create-student'} className='nav-link'>
                    Create Student
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/student-list'} className='nav-link'>
                    Student List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className='wrapper'>
                <Switch>
                  {/* <Route exact path='/' component={CreateStudent}></Route>
                  <Route exact path='/create-student' component={CreateStudent}></Route>
                  <Route exact path='/edit-student/:id' component={EditStudent}></Route>
                  <Route exact path='/student-list' component={StudentList}></Route> */}
                  <Route exact path='/'> <CreateStudent/> </Route>
                  <Route exact path='/create-student'> <CreateStudent/> </Route>
                  <Route exact path='/edit-student/:id'> <EditStudent/> </Route>
                  <Route exact path='/student-list'> <StudentList/> </Route>
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>

  )
}

export default App
