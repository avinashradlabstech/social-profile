import React from 'react'
import userData from '../data/userData'
import { Helmet } from 'react-helmet'
import BasicDetails from '../components/BasicDetails/BasicDetails'
import ProfileImage from '../components/ProfileImage/ProfileImage'
import Button from '../components/Button/Button'

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        {/* Standard Meta Tags */}
        <title>{`${userData.basicDetails.name} | Social Profile`}</title>
        <meta
          name='description'
          content={`${userData.basicDetails.name}'s social profile`}
        />
        <meta name='keywords' content='social profile, user profile, social media' />

        {/* Open Graph Meta Tags (for Facebook, LinkedIn, etc.) */}
        <meta property='og:type' content='profile' />
        <meta property='og:title' content={`${userData.basicDetails.name}'s Profile`} />
        <meta
          property='og:description'
          content={`${userData.basicDetails.name}'s personal profile on facebook`}
        />
        <meta
          property='og:url'
          content={`https://www.socialapp.com/profile/${userData.basicDetails.name}`}
        />
        <meta property='og:image' content={userData.basicDetails.profileImage} />

        {/* Twitter Card Meta Tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={`${userData.basicDetails.name}'s Profile`} />
        <meta
          name='twitter:description'
          content={`${userData.basicDetails.name}'s personal profile on Twitter`}
        />
        <meta name='twitter:image' content={userData.basicDetails.profileImage} />
      </Helmet>

      <div className='px-6 py-6 h-auto bg-grey-900  justify-center items-center min-h-[812px]'>
        <div className='flex flex-col  flex-1 justify-center items-center'>
          <div className='flex flex-col  bg-grey-800 px-6 py-6 md:px-10 md:py-40 gap-300 justify-center items-center  md:max-w-[456px]'>
            <ProfileImage
              imageUrl={userData.basicDetails.profileImage}
              alt={userData.basicDetails.name}
            />
            <BasicDetails
              name={userData.basicDetails.name}
              location={userData.basicDetails.location}
              jobRole={userData.basicDetails.jobRole}
            />
            {userData.socialDetails.map((data, index) => (
              <div
                key={index}
                className='flex flex-col text-white gap-200 text-center min-w-[279px] md:min-w-[352px]'>
                <Button socialMedium={data.socialMedium} url={data.url} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
