import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="container">
      <div className='title'>
        Navbar
      </div>
      <div className='anchors'>
        <Link className='anchor' to={'/'}>Home</Link>
        <Link className='anchor' to={'/users'}>Users</Link>
        <Link className='anchor' to={'/about'}>About</Link>
        <Link className='anchor' to={'/contact'}>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar