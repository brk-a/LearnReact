import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import StudentTableRow from './StudentTableRow'

const StudentList = () => {
    const [students, setStudents] = useState([])

    useEffect(() => {
      axios.get('http://localhost:4000/students/')
      .then(({data}) => setStudents(data))
      .catch(err => console.log(err))
    }, [])

    const dataTable = () => {
        return students.map((res, i) => <StudentTableRow key={i} obj={res}/>)
    }
    
  return (
    <div className='table-wrapper'>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Student ID</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>{dataTable()}</tbody>
        </Table>
    </div>
  )
}

export default StudentList