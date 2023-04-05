import React from 'react'
import Bar1 from './Bar1'
import DemoScatter from './DemoScatter'
import SideBar from './SideBar'



function Overview() {
  
  return (
    <>
    <div className='bg-[#E7E9EB]  h-fit flex'>
      <SideBar />
      <div className='w-[900px] pt-24 '>
        <p className='ml-7 text-indigo-900'>Sales Figure</p>
       <DemoScatter />
       </div>
      </div> 
     <div className='bg-[#E7E9EB] pt-12 pb-2'>
                   {/* Importing the bar chart */}
                <Bar1 />
             </div> 
    </>
  )
}

export default Overview
