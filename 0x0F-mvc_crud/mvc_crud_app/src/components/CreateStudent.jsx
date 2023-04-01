import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import StudentForm from './StudentForm'

const CreateStudent = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        student_id: '' 
    })

    const handleSubmit = studentObject => {
        axios.post('http://localhost:4000/students/create-student', studentObject)
        .then(res => {
            if(res.status === 200)
                alert('Student created successfully')
            else
                Promise.reject()
        })
        .catch(err => alert('SOmething went wrong'))
    }
  return (
    <StudentForm initialValues={formValues}
        onSubmit={handleSubmit}
        enableReinitialize
    >
        Create Student
    </StudentForm>
  )
}

export default CreateStudent