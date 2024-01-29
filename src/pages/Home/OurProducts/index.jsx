import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from 'features/actions/actions'
import { SingleProductCard, ShowMore } from 'components'

const OurProducts = () => {
  const data = useSelector((state) => state.products?.items) ?? []
  const { totalCount } = useSelector((state) => state.products)

  const wishlist = useSelector((state) => state.wishList.wishListItems)
  const [showMore, setShowMore] = useState(8)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts({ count: showMore, pages: 1 }))
  }, [dispatch, showMore])

  const isProductInWishlist = (product) => {
    return wishlist.some((item) => item?.id === product?.id)
  }
  const showMoreProduct = () => {
    dispatch(fetchProducts({ count: showMore, pages: 1 }))
    setShowMore((prevShowMore) => prevShowMore + 8)
  }

  return (
    <div className='container products text-center'>
      <h2 className='title'>Our Products</h2>
      <div className='row mt-4'>
        {data?.map((product) => {
          const productIsFav = isProductInWishlist(product)

          return (
            <div
              className=' mb-4 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12'
              style={{ position: 'relative' }}
              key={product.id}
            >
              <SingleProductCard
                key={product.id}
                productIsFav={productIsFav}
                product={product}
              />
            </div>
          )
        })}
      </div>
      {totalCount === showMore ? (
        ''
      ) : (
        <ShowMore showMoreProduct={showMoreProduct} />
      )}
    </div>
  )
}

export default OurProducts
