import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from 'features/slices/wishListSlice'
import { addToCart } from 'features/slices/cartSlice'
import { delete_x } from 'assets/scripts'

const FavProducts = () => {
  const dispatch = useDispatch()
  const wishlist = useSelector((state) => state.wishList.wishListItems)

  return (
    <div className='container fav-products mt-5'>
      <div className='fav-titles'>
        <h4 className='product-title ms-5  mb-4'>Product</h4>
        <h4 className='product-price'>Price</h4>
      </div>
      {wishlist?.map((item) => {
        return (
          <div className='fav-product m-3 mb-4' key={item.id}>
            <div className='fav-product-remove'>
              <button onClick={() => dispatch(removeFromWishlist(item))}>
                <img src={delete_x} alt='remove-product' />
              </button>
            </div>
            <div className='fav-product-info d-flex align-items-center '>
              <div className='fav-img'>
                <img src={item?.imageFiles?.[0]} alt={item.title} />
              </div>
              <p className='ms-5'>{item.title}</p>
            </div>
            <div className='fav-product-price'>
              <p>$ {item.discountedPrice.toFixed(2)}</p>
            </div>
            <div className='fav-product-add'>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to cart
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FavProducts
