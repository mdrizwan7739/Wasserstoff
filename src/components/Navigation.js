import React from 'react'
import{ NavLink } from "react-router-dom";

function Navigation() {
  
  return (
    <div className='mt-2'>
    
        {/* Creating link for statistics */}
      <NavLink to="/statistics" className='text-gray-600 mr-5 ml-20 stats'>Statistics</NavLink>
         {/* Creating link for overview */}
      <NavLink to="/" className='text-gray-600 mx-5'>Overview</NavLink>
          {/* Creating link for dashboard */}
      <NavLink to="/dashboard" className='text-gray-600 mx-5'>Dashboard</NavLink>
               {/* Creating link for analytics */}
      <NavLink to="/analytics" className='text-gray-600 ml-5  mr-20 '>Analytics</NavLink>
    </div>
  )
}

export default Navigation
