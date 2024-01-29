import React from 'react'
import { Link } from 'react-router-dom'
import closeIcon from 'assets/images/close-icon.svg'

const MobileNav = ({ setModalOpen, isModalOpen }) => {
  const token = JSON.parse(localStorage.getItem('token'))

  function handleClose() {
    setModalOpen(false)
  }

  return (
    <div className={isModalOpen ? 'MobileNav active' : 'MobileNav'}>
      <div className='close-icon' onClick={handleClose}>
        <img src={closeIcon} alt='Furniro Close Icon' />
      </div>
      <ul>
        {[
          { pageName: 'Home', href: '/' },
          { pageName: 'Shop', href: '/shop' },
          { pageName: 'Blog', href: '/blog' },
          { pageName: 'Contact', href: '/contact' },
          {
            pageName: token ? 'Profile' : 'Login',
            href: token ? '/user-profile' : '/login',
          },
          { pageName: 'Cart', href: '/cart' },
          { pageName: 'Checkout', href: '/checkout' },
        ]?.map(({ pageName, href }, i) => (
          <li key={i} onClick={handleClose}>
            <Link to={href}>{pageName}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileNav
