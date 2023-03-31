import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import Preferences from './Preferences'
import SearchBar from './SearchBar'

function Header() {
  return (
    <div className='flex  m-1  pt-2 ' >
    
      
        <Logo />
        <SearchBar />
        <Navigation />
        <Preferences />
      
    </div>
  )
}

export default Header
