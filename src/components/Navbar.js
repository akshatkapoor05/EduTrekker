import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar__navbar_parent'>
      <div className='navbar__navbar_items'>Home</div>
      {/* <div className='navbar__navbar_items'>Achievements</div> */}
      {/* <div className='navbar__navbar_items'>Sponsors</div> */}
      {/* <div className='navbar__navbar_items'>Activities</div> */}
      <div className='navbar__navbar_items'>Members</div>
      <div className='navbar__navbar_items'>
        About us
      </div>
      <div className='navbar__navbar_items'>Courses </div>
    </div>
  )
}

export default Navbar