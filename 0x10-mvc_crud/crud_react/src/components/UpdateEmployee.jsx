import React, {useState, useEffect} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UpdateEmployee = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [checkbox, setCheckbox] = useState(false)
  const [id, setId] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    setId(localStorage.getItem('ID'))
    setFirstName(localStorage.getItem('First Name'))
    setLastName(localStorage.getItem('Last Name'))
    setCheckbox(localStorage.getItem('Checkbox Value') === 'true' ? true : false)
  }, [])
  
  const updateData = () => {
    try {
      axios.put(`https://6427d6f9161067a83b01dfa2.mockapi.io/ghostCoLtd/${id}`, {
        firstName,
        lastName,
        checkbox
      }).then(() => {
        navigate('/read')
      })
    } catch (error) {
      console.log('updateData error: ', error)
      
    }
  }

  const changeFirstName = (e) => setFirstName(e.target.value)
  const changeLastName = (e) => setLastName(e.target.value)
  const changeCheckbox = () => setCheckbox(!checkbox)

  return (
    <div>
        <Form className="create-form">
            <Form.Field>
              <label>First Name</label>
              <input placeholder='First Name' onChange={changeFirstName} value={firstName}/>
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder='Last Name' onChange={changeLastName} value={lastName}/>
            </Form.Field>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onClick={changeCheckbox} />
            </Form.Field>
            <Button type='submit' onClick={updateData}>Update</Button>
        </Form>
    </div>
  )
}

export default UpdateEmployee