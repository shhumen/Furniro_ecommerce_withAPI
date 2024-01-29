import React from 'react'
import { BreadCrumb } from 'components'
import { logo } from 'assets/scripts'

const Header = ({ title, img }) => {
  return (
    <div className='header d-flex justify-content-center'>
      <img src={img} alt='header-img' />
      <div className='layout text-center'>
        <img src={logo} alt='logo' />
        <p className='title'>{title}</p>
        <BreadCrumb />
      </div>
    </div>
  )
}

export default Header
