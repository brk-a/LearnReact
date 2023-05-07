import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
    <div className="ui-three-buttons">
        <NavLink to='/create'>
            <button className="ui-active-button">Home</button>
        </NavLink>
        <NavLink to='/create'>
            <button className="ui-active-button">Create</button>
        </NavLink>
        <NavLink to='/read'>
            <button className="ui-active-button">Read</button>
        </NavLink>
        <NavLink to='/update'>
            <button className="ui-active-button">Update</button>
        </NavLink>
    </div>
  )
export default Navbar