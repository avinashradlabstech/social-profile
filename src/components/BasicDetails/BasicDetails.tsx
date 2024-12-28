import React from 'react'

interface basicDetails {
  name: string
  location: string
  jobRole: string
}

const BasicDetails: React.FC<basicDetails> = ({ name, location, jobRole }) => {
  return (
    <>
      <div className='flex flex-col justify-center items-center self-stretch'>
        <p className='font-inter text-24 text-white font-semibold leading-150 '>{name}</p>
        <p className='font-inter text-14 justify-center items-center text-green font-bold leading-150 '>
          {location}
        </p>
      </div>
      <p className='font-inter text-14 text-center text-white font-normal leading-150 '>
        {jobRole}
      </p>
    </>
  )
}

export default BasicDetails
