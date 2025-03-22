import React from 'react'

const CompletedProjects = ({number, goal}) => {
  return (
    <>
        <div className='pr-[50px] w-[50%]'>
                <p className='text-[100px]'>{number}+</p>
                <hr/>
                <p className='pt-[25px] text-2xl'>{goal}</p>
        </div>

    </>
  )
}

export default CompletedProjects
