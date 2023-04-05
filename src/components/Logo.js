import React from 'react'

function Logo() {
    return (
    <div className='flex'>
            {/* Fetching logo of the company */}
      <img className="h-10 ml-10 mb-1" src="https://www.thewasserstoff.com/images/wstf-logo.svg" alt="logo" />
              {/* Writing name of the company */}
      <h5 className='pt-1.5 font-medium ml-2 mr-20'>WASSERSTOFF</h5>
    </div>
    
    )
}

export default Logo
