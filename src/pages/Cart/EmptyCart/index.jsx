import React from 'react'
import { Link } from 'react-router-dom'
import { empty_cart } from 'assets/scripts/index'

const EmptyCart = () => {
  return (
    <div className='container empty-cart'>
      <img src={empty_cart} alt='empty cart' />
      <h2>Your cart is empty</h2>
      <p>
        Looks like you have not added anything to your cart. <br /> Go ahead and
        explore.
      </p>
      <button>
        <Link to='/shop'> Return to shop </Link>
      </button>
    </div>
  )
}

export default EmptyCart
