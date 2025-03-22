import React from 'react'
import CompletedProjects from './AboutMeComps/CompletedProjects'

const AboutMe = () => {
  return (
    <>
    <div className='mx-[25px] pt-[100px] flex justify-between'>
      <div className='text-[25px]'>• About Me</div>
      <div>
        <div>
          <h1 className='text-[35px]'>I collaborate with global clients to Cultivate </h1>
          <h1 className='text-[35px]'>Compelling and Immersive Digital Experiences </h1>
          <h1 className='text-[35px]'>Through The Realms of Design and Development</h1>
        </div>
        <div>
          <div className='flex justify-between'>
            <CompletedProjects  number="12+" goal="Completed Projects"/>
            <CompletedProjects  number="4+" goal="Years of Experience"/>
          </div>
        </div>
        <div className='pt-[80px]'>
          <button className='text-2xl border-2 py-[20px] px-[40px] rounded-[50px]'>More About Me</button>
        </div>
      </div>
    </div>
    <hr className='my-[50px] border-t-2 mx-[25px]'/>
    </>

  )
}

export default AboutMe
