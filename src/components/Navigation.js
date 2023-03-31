import React from 'react'
import{ NavLink } from "react-router-dom";

function Navigation() {
  
  return (
    <div className='mt-2'>
      <NavLink to="/statistics" className='text-gray-600 mr-5 ml-20 stats'>Statistics</NavLink>
      <NavLink to="/" className='text-gray-600 mx-5'>Overview</NavLink>
      <NavLink to="/dashboard" className='text-gray-600 mx-5'>Dashboard</NavLink>
      <NavLink to="/analytics" className='text-gray-600 ml-5  mr-20 '>Analytics</NavLink>
    </div>
  )
}

export default Navigation
