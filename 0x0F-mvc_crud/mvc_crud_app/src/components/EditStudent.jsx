import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import StudentForm from './StudentForm'

const EditStudent = (props) => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        student_id: ''
    })

    const handleSubmit = (studentObject) => {
        axios.put('http://localhost:4000/students/update-student/' +
            props.match.params.id,
            studentObject
        )
        .then((res) => {
            if(res.status === 200){
                alert('Student successfully updated')
                props.history.push('/student-list')
            } else 
                Promise.reject()
        })
        .catch((err) => alert('Something went wrong'))
    }

    useEffect(() => {
      axios.get('http://localhost:4000/students/update-student' +
        props.match.params.id
      )
      .then((res) => {
        const {name, email, student_id} = res.data
        setFormValues({name, email, student_id})
      })
      .catch((err) => console.log(err))
    }, [])
    
  return (
    <StudentForm initialValues={formValues}
        onSubmit={handleSubmit}
        enableReinitialize
    >
        Update Student
    </StudentForm>
  )
}

export default EditStudent