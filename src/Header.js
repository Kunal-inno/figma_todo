import React from 'react'
import "./Header.css"

import { FaPlus } from "react-icons/fa";

const Header = () => {
  return (
    <>
    <div className='headerdiv'>
    <h1>Today</h1>
    <span className='plusSign'><FaPlus /></span>

    
    </div>

    </>
  )
}

export default Header