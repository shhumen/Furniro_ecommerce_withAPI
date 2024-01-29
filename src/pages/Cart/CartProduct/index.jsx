import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from 'features/actions/actions'
import {
  addToCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from 'features/slices/cartSlice'
import { delete_icon } from 'assets/scripts'

const CartProduct = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(getTotals())
  }, [dispatch, cart])

  // For qty input
  const handleQuantityChange = (product, newQty) => {
    if (newQty > product.cartQty) {
      dispatch(addToCart(product))
    } else if (newQty < product.cartQty) {
      dispatch(decreaseCart(product))
    }
  }

  return (
    <div className='cart mt-5 pt-5 container'>
      <div className='row'>
        <div className='col col-lg-8 col-md-8 '>
          <div className='cart-titles'>
            <h3 className='product-title'>Product</h3>
            <h3 className='price'>Price</h3>
            <h3 className='quantity'>Quantity</h3>
            <h3 className='total'>Subtotal</h3>
            <h3 className='total'>Size</h3>
            <h3 className='total'>Color</h3>
          </div>
          <div className='cart-items'>
            {cart.cartItems.map((product) => {
              return (
                <div className='cart-item' key={product?.id}>
                  <div className='cart-product'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <Link to='#'>
                        <img src='' alt='product' />
                      </Link>
                      <h3>
                        {product?.name}
                        {product?.color}
                      </h3>
                      <br />
                    </div>
                  </div>
                  <div className='cart-product-price'>${product?.price}</div>
                  <div className='cart-quantity text-center'>
                    <input
                      type='number'
                      className='count'
                      value={product?.cartQty}
                      onChange={(e) =>
                        handleQuantityChange(
                          product,
                          parseInt(e.target.value, 10)
                        )
                      }
                      onBlur={() => dispatch(getTotals())}
                    />
                  </div>
                  <div className='cart-total-price'>
                    <span className='m-3'>
                      $ {product?.price * product?.cartQty}
                    </span>
                    <button onClick={() => dispatch(removeFromCart(product))}>
                      <img src={delete_icon} alt='delete' />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className='col col-lg-4 col-md-4 cart-total p-4'>
          <h2>Cart Total</h2>
          <div className='cart-total-content d-flex justify-content-around p-5'>
            <div className='cart-total-title'>
              <p>Subtotals</p>
              <p>Total</p>
            </div>
            <div className='cart-total-price'>
              <p className='subtotal-price'>$ {cart.cartTotalAmount}</p>
              <p className='total-price'>RP 40.0000</p>
            </div>
          </div>
          <button className='checkout-btn'>
            <Link to='/checkout'>CheckOut</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartProduct
