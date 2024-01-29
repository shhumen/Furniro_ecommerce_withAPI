import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  const notFooter = ['/login', '/register', '/forgot_password']

  if (notFooter.includes(location?.pathname)) {
    return null
  }

  return (
    <div className='container-fluid p-5 mt-5 footer'>
      <div className='row'>
        <div className='col-lg-3 col-md-4 col-sm-12 col-12 mb-2 text-left'>
          <div className='logo'>
            <p>Funiro.</p>
            <span>
              400 University Drive Suite 200 Coral Gables,FL 33134 USA
            </span>
          </div>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-12 col-12 mb-2 text-center'>
          <div className='links'>
            <p>Links</p>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/shop'>Shop</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-12 col-12 mb-2 text-center'>
          <div className='faq'>
            <p>Help</p>
            <ul>
              <li>
                <Link to='/'>Payment Options</Link>
              </li>
              <li>
                <Link to='/'>Returns</Link>
              </li>
              <li>
                <Link to='/'>Privacy Policies</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-12 col-12 mb-2 pb-3 text-center'>
          <div className='news'>
            <p>Newsletter</p>
            <div className='d-flex text-center justify-content-around'>
              <input type='email' placeholder='Enter Your Email Address' />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className='row rights pt-4 text-start'>
        <span>2023 furino. All rights reverved</span>
      </div>
    </div>
  )
}

export default Footer
