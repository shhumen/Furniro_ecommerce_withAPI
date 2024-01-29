import React from 'react'
import { useSelector } from 'react-redux'
import { CartProduct, EmptyCart } from 'pages'
import { Header, Services } from 'components'
import { blogImg } from 'assets/scripts'

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems)
  return (
    <>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <Header title='Cart' img={blogImg} />
          <CartProduct />
          <Services />
        </>
      )}
    </>
  )
}

export default Cart
