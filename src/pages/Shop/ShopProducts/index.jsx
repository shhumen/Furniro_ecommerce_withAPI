import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFilteredProducts } from 'features/slices/shopSlice'
import { SingleProductCard } from 'components'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { IoShareSocialSharp } from 'react-icons/io5'
import {
  addToWishlist,
  removeFromWishlist,
} from 'features/slices/wishListSlice'

const ShopProducts = ({
  filteredProducts,
  gridBtn,
  size,
  color,
  tag,
  category,
  minPrice,
  maxPrice,
  show,
  sortBy,
}) => {
  const dispatch = useDispatch()
  const currentPage = useSelector((state) => state.products.currentPage)
  const wishlist = useSelector((state) => state.wishList.wishListItems)
  useEffect(() => {
    dispatch(
      getFilteredProducts({
        productSizes: size,
        productColors: color,
        productTags: tag,
        categoryName: category,
        maxPrice: maxPrice,
        minPrice: minPrice,
        orderBy: sortBy,
        page: currentPage,
        take: show,
      })
    )
  }, [
    dispatch,
    currentPage,
    minPrice,
    maxPrice,
    sortBy,
    show,
    size,
    color,
    tag,
    category,
  ])

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

  return (
    <div className='container-xl container-lg container-md container-sm mt-5 pt-5 shop_products'>
      <div className='row'>
        {filteredProducts?.map((product) => {
          const productIsFav = isProductInWishlist(product)
          return (
            <div
              className={` mb-4 ${
                gridBtn
                  ? 'col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12'
                  : 'col-12 viewList'
              }`}
              style={{ position: 'relative' }}
              key={product.id}
            >
              {gridBtn ? (
                <SingleProductCard gridBtn={gridBtn} product={product} />
              ) : (
                <div className='card_ d-flex justify-content-around'>
                  <div className='card-img'>
                    <img
                      onClick={() =>
                        (window.location.href = `shop/${product?.id}`)
                      }
                      src={product?.imageFiles?.[0]}
                      alt='product'
                    />
                  </div>
                  <div className='card-body d-flex justify-content-between'>
                    <div className='content d-block  d-md-flex justify-content-between px-3'>
                      <div className='card-title'>
                        <h4>{product?.title}</h4>
                        <p>{product?.subTitle}</p>
                      </div>
                      <div className='share-like'>
                        <span>
                          <IoShareSocialSharp />
                        </span>
                        <span onClick={(e) => handleWishList(product, e)}>
                          {productIsFav ? (
                            <>
                              <FaHeart style={{ color: 'red' }} />
                            </>
                          ) : (
                            <>
                              <FaRegHeart />
                            </>
                          )}
                        </span>
                      </div>
                    </div>
                    <div className='content justify-content-between align-items-center d-flex px-3 my-2'>
                      <div className='card-price '>
                        {product?.discountedPrice === product?.salePrice ? (
                          <div className='disc-price'>
                            $ {product?.discountedPrice}
                          </div>
                        ) : (
                          <>
                            <div className='disc-price'>
                              $ {product?.discountedPrice}
                            </div>
                            <div className='price'>$ {product?.salePrice}</div>
                          </>
                        )}
                      </div>
                      <button>ADD TO CART</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
      <div className='row'>
        {/* <Pagination totalPages={totalProductCount} page={show} /> */}
      </div>
    </div>
  )
}

export default ShopProducts
