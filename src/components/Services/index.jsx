import React from 'react'

import { customer_support, shipping, guarantee, trophy } from 'assets/scripts'

const Services = () => {
  return (
    <div className='container-fluid d-flex justify-content-center mt-4 p-5 services'>
      <div className='row'>
        <div className='col col-lg-3 col-md-3 col-sm-6 col-12'>
          <div className='service d-flex'>
            <div>
              <img src={trophy} alt='service icon' />
            </div>
            <div>
              <h2>High Quality</h2>
              <p>crafted from top materials</p>
            </div>
          </div>
        </div>
        <div className='col col-lg-3 col-md-3 col-sm-6 col-12'>
          <div className='service d-flex'>
            <div>
              <img src={guarantee} alt='service icon' />
            </div>
            <div>
              <h2>Warranty Protection</h2>
              <p>Over 2 years</p>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
          <div className='service d-flex'>
            <div>
              <img src={shipping} alt='service icon' />
            </div>
            <div>
              <h2>Free Shipping</h2>
              <p>Order over 150 $</p>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
          <div className='service d-flex'>
            <div>
              <img src={customer_support} alt='service icon' />
            </div>
            <div>
              <h2>24 / 7 Support</h2>
              <p>Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
