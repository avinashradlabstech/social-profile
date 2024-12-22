import React from 'react'

interface buttonProps {
  socialMedium: string
  url: string
}

const Button: React.FC<buttonProps> = ({ socialMedium, url }) => {
  return (
    <>
      <a target='_blank' className='px-150 py-150 text-14 bg-grey-700 rounded-[8px] font-bold leading-150 self-stretch hover:bg-green transition-colors hover:text-black' href={url}>
        {socialMedium}
      </a>
    </>
  )
}
export default Button
