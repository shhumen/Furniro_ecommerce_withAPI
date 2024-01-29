import React from 'react'
import { Header, Services } from 'components'
import { blogImg } from 'assets/scripts'
import BillingDetails from './BilliingDetails'
import CheckoutDetails from './CheckoutDetails'

const Checkout = () => {
  return (
    <>
      <Header title='Checkout' img={blogImg} />
      <div className='checkout container'>
        <div className='row mt-5 mb-5'>
          <BillingDetails />
          <CheckoutDetails />
        </div>
      </div>
      <Services />
    </>
  )
}

export default Checkout
