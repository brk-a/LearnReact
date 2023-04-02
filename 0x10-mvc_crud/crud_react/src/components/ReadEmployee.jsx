import React, {useState, useEffect} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ReadEmployee = () => {
  const [APIData, setAPIData] = useState([])

  useEffect(() => {
    axios.get(`https://6427d6f9161067a83b01dfa2.mockapi.io/ghostCoLtd`)
      .then((res) => setAPIData(res.data))
  }, [])

  const setData = (data) => {
    console.log(data)
  }
  const getData = () => {
    axios.get(`https://6427d6f9161067a83b01dfa2.mockapi.io/ghostCoLtd`)
        .then((getData) => {
             setAPIData(getData.data);
         })
  }
  const handleDelete = (id) => {
    axios.delete(`https://6427d6f9161067a83b01dfa2.mockapi.io/ghostCoLtd/${id}`)
      .then(() => {getData()})
  }
  
  return (
      <div>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
                <Table.HeaderCell>First name</Table.HeaderCell>
                <Table.HeaderCell>Last name</Table.HeaderCell>
                {/* <Table.HeaderCell>E-mail address</Table.HeaderCell> */}
                <Table.HeaderCell>Checked</Table.HeaderCell>
                {/* <Button>Update</Button>
                <Button>Delete</Button> */}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {APIData.map((data, i) => (
              <Table.Row key={i}>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                {/* <Table.Cell>goatmatata@ghost.com</Table.Cell> */}
                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                <Table.Cell>
                <Link to='/update'>
                  <Button onClick={() => setData(data)}>Update</Button>
                </Link>
                </Table.Cell>
                <Table.Cell> 
                    <Button onClick={() => handleDelete(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
  </div>
  )
}

export default ReadEmployee