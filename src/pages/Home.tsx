import React from 'react'
import Button from '../components/Button/Button'

const Home: React.FC = () => {
  interface SolcialLinkData {
    socialMedium: string
    url: string
  }

  const solcialLinkData: SolcialLinkData[] = [
    {
      socialMedium: 'Github',
      url: 'https://github.com',
    },
    {
      socialMedium: 'Frontend Mentor',
      url: 'https://frontendmentor.io',
    },
    {
      socialMedium: 'Linkedin',
      url: 'https://linkedin.com',
    },
    {
      socialMedium: 'Twitter',
      url: 'https://twitter.com',
    },
    {
      socialMedium: 'Instagram',
      url: 'https://instagram.com',
    },
  ]
  return (
    <div className='px-6 py-6 h-screen bg-grey-900  justify-center items-center min-h-[812px]'>
      <div className='flex flex-col  flex-1 justify-center items-center'>
        <div className='flex flex-col  bg-grey-800 px-6 py-6 md:px-10 md:py-40px gap-300 justify-center items-center  md:max-w-[456px] 2md:max-w-[384px]'>
          <img
            className='rounded-[999px] w-[88px] self-center'
            src='/avatar-jessica.jpeg'></img>
          <div className='flex flex-col justify-center items-center self-stretch'>
            <h1 className='font-inter text-24 text-white font-semibold leading-150 '>
              Jessica Randall
            </h1>
            <p className='font-inter text-14 justify-center items-center text-green font-bold leading-150 '>
              London, United Kingdom
            </p>
          </div>
          <p className='font-inter text-14 text-center text-white font-normal leading-150 '>
            "Front-end developer and avid reader."
          </p>

          {solcialLinkData.map((data, index) => (
            <div
              key={index}
              className='flex flex-col text-white gap-200 text-center min-w-[279px] md:min-w-[352px] 2md:min-w-[280px]'>
              <Button socialMedium={data.socialMedium} url={data.url} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
