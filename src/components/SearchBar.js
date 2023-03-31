import React from 'react'

function SearchBar() {
  const handleSearch = (e) => {
    e.preventDefault();
  }

  return (

    <div className='mt-2'>
      <form onSubmit={handleSearch}>
        <input type="text" className='bg-[#E7E9EB] h-7 pt-0.5 w-80 ml-20 rounded-l-lg  focus:outline-none pl-1' />
        <button> <i className="fa fa-magnifying-glass  bg-[#E7E9EB] w-8 h-7  pt-2 mr-20 rounded-r-lg"></i></button>
      </form>
    </div>
  )
}

export default SearchBar
