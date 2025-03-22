import React from 'react'

const Nav = () => {
  return (
    <div className='w-[95%] mx-auto' >
      <ul className='flex justify-between  mx-auto py-[15px]'>
        <div className='flex my-auto'>
          <li className='mx-[25px] text-2xl'>Home</li>
          <li className='mx-[25px] text-2xl'>About</li>
        </div>
        <div className='flex my-auto'>
          <li className='mx-[25px] text-5xl'>T P N</li>
        </div>
        <div className='flex my-auto'>
          <li className='mx-[25px] text-2xl'>Work</li>
          <li className='mx-[25px] text-2xl'>Contact</li>
        </div>
      </ul>
    </div>
  )
}

export default Nav
