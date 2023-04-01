import React from 'react'
import * as Yup from 'yup'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import { validationSchema } from '../schemas'

const StudentForm = (props) => {
    // const validationSchema = validationSchema
  return (
    <div className='form-wrapper'>
        <Formik {...props} validationSchema={validationSchema}>
            <Form>
                <FormGroup>
                    <Field name='name' type='text' className='form-control'></Field>
                    <ErrorMessage name='name' component='span' className='d-block invalid-feedback'></ErrorMessage>
                </FormGroup>
                <FormGroup>
                    <Field name='email' type='text' className='form-control'></Field>
                    <ErrorMessage name='email' component='span' className='d-block invalid-feedback'></ErrorMessage>
                </FormGroup>
                <FormGroup>
                    <Field name='student-id' type='number' className='form-control'></Field>
                    <ErrorMessage name='student-id' component='span' className='d-block invalid-input'></ErrorMessage>
                </FormGroup>
                <Button type='submit' variant='danger' size='lg' block='block'>
                    {props.children}
                </Button>
            </Form>
        </Formik>
    </div>
  )
}

export default StudentForm