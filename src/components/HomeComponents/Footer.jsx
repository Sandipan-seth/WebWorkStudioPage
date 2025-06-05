import React from 'react'
import UpperFooter from './FooterComponent/UpperFooter'
import LowerFooter from './FooterComponent/LowerFooter'

const Footer = () => {
  return (
    <div className='mt-20 md:mt-60'>
      <UpperFooter />
      <LowerFooter />
    </div>
  )
}

export default Footer
