import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToWishlist,
  removeFromWishlist,
} from 'features/slices/wishListSlice'
import { heart, share } from 'assets/scripts'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoShareSocial } from 'react-icons/io5'

const SingleProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const wishlist = useSelector((state) => state.wishList.wishListItems)
  const [productModals, setProductModals] = useState({})

  const handleWishList = (product, e) => {
    e.stopPropagation()

    if (isProductInWishlist(product)) {
      dispatch(removeFromWishlist(product))
    } else {
      dispatch(addToWishlist(product))
    }
  }

  const isProductInWishlist = (product) => {
    return wishlist.some((item) => item?.id === product?.id)
  }

  const handleShowModal = (productId, e) => {
    setProductModals((prevModals) => ({
      ...prevModals,
      [productId]: true,
    }))
    e.stopPropagation()
  }

  const productIsFav = isProductInWishlist(product)

  return (
    <div className='card'>
      <div className='card-body'>
        <div className='card_img'>
          <img src={product?.imageFiles?.[0]} alt='product' />
        </div>
        <div className='card-title'>
          <h4>{product?.title.substring(0, 15)}</h4>
        </div>
        <div className='card-text'>
          <p>{product?.subTitle.substring(0, 25)}</p>
        </div>
        <div className='card-price d-flex justify-content-between align-items-center'>
          {product?.discountedPrice === product?.salePrice ? (
            <div className='disc-price'>
              $ {product?.discountedPrice.toFixed(2)}
            </div>
          ) : (
            <>
              <div className='disc-price'>
                $ {product?.discountedPrice.toFixed(2)}
              </div>
              <div className='price'>$ {product?.salePrice.toFixed(2)}</div>
            </>
          )}
        </div>
        <div className='mobile-add-fav align-items-center- justify-content-center px-2'>
          <button onClick={(event) => handleShowModal(product?.id, event)}>
            <AiOutlineShoppingCart />
          </button>
          {/* <div className='break'></div> */}
          <button>
            <IoShareSocial />
          </button>
          <button onClick={(e) => handleWishList(product, e)}>
            {productIsFav ? (
              <>
                <FaHeart style={{ color: 'red' }} />
              </>
            ) : (
              <>
                <FaRegHeart />
              </>
            )}
          </button>
        </div>
      </div>
      {product?.isNew && product.discountPercent > 0 ? (
        <div>
          <span
            className='new text-center justify-content-center'
            style={{ left: '8%' }}
          >
            New
          </span>
          <span className='disc text-center justify-content-center'>
            -{product.discountPercent}%
          </span>
        </div>
      ) : !product?.isNew && product.discountPercent > 0 ? (
        <span className='disc text-center justify-content-center'>
          -{product.discountPercent}%
        </span>
      ) : product?.isNew ? (
        <span className='new text-center justify-content-center'>New</span>
      ) : (
        ''
      )}
      <div
        className='text-center layout'
        onClick={() => (window.location.href = `shop/${product?.id}`)}
      >
        <button onClick={(event) => handleShowModal(product?.id, event)}>
          ADD TO CART
        </button>
        <div className='smth mt-4 d-flex justify-content-center'>
          <span>
            <img src={share} alt='share icon' /> Share
          </span>
          <span onClick={(e) => handleWishList(product, e)}>
            {productIsFav ? (
              <>
                <FaHeart style={{ color: 'red' }} /> Unlike
              </>
            ) : (
              <>
                <img src={heart} alt='' /> Like
              </>
            )}
          </span>
        </div>
      </div>
      <div className='layout-mobile'></div>
    </div>
  )
}

export default SingleProductCard
