import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useState } from 'react';
import axios from 'axios'

const CreateEmployee = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const changeFirstName = (e) => setFirstName(e.target.value)
    const changeLastName = (e) => setLastName(e.target.value)
    const changeCheckbox = (e) => setCheckbox(!checkbox)

    const postData = () => {
        axios.post(`https://6427d6f9161067a83b01dfa2.mockapi.io/ghostCoLtd`, {
            firstName,
            lastName,
            checkbox
        })
    }

    return (
        <Form className='create-form'>
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' onChange={changeFirstName}/>
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' onChange={changeLastName}/>
            </Form.Field>
            <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' onChange={changeCheckbox}/>
            </Form.Field>
            <Button onClick={postData} type='submit'>Submit</Button>
        </Form>
    )
}


export default CreateEmployee