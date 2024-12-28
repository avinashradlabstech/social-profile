import React from 'react'
import { removeExtension } from '../../utils/helper'

interface ProfileImageProps {
  imageUrl: string
  alt: string
}

const ProfileImage: React.FC<ProfileImageProps> = ({ imageUrl, alt }) => {
  const updatedImageUrl = removeExtension(imageUrl)
  return (
    <>
      <img
        className='rounded-[999px] self-center'
        src={`${updatedImageUrl}-1024.jpeg`}
        srcSet={`
          ${updatedImageUrl}-370.jpeg 370w, 
          ${updatedImageUrl}-768.jpeg 768w, 
          ${updatedImageUrl}-1024.jpeg 1024w, 
          ${updatedImageUrl}-1280.jpeg 1280w, 
          ${updatedImageUrl}-1920.jpeg 1920w
        `}
        sizes={`
          (max-width: 370px) 200px, 
          (max-width: 768px) 150px, 
          (max-width: 1024px) 200px, 
          (max-width: 1280px) 250px, 
          300px
        `}
        alt={alt}
        height='auto'
        loading='lazy'></img>
    </>
  )
}

export default ProfileImage
