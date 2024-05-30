import React from 'react'
import { IoSearch } from "react-icons/io5";
import Prof1 from "../../assets/profile-1.jpg"
import "./Nav.css"

const Nav = () => {
   
  return (
    <nav>
      <div className="container">
        <h2 className='logo'>
           nokoSocial
        </h2>
        <div className='search-bar'>
            <IoSearch/>
            <input type='search' placeholder='Search for creators,inspirations and projects' />
        </div>
        <div className='create'>
            <label className="btn btn-primary" for="create">Create</label>
           <div className='profile-photo'>
           <img src={Prof1} alt='' />
           </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
