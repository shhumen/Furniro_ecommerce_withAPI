import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsById } from 'features/actions/actions'
import {
  ProductSlider,
  ProductDetailsTabs,
  RelatedProducts,
  ProductBreadCrumb,
  ProductDetails,
} from 'pages'

const ProductPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const product = useSelector((state) => state.productDetails?.productDetails)
  const { productRating, productReviews, totalReviewCount } = useSelector(
    (state) => state.review
  )
  const [selectedColor, setSelectedColor] = useState()
  const [selectedSize, setSelectedSize] = useState()

  useEffect(() => {
    if (id) {
      dispatch(fetchProductsById({ productID: id, sizeID: selectedSize }))
    }
  }, [dispatch, id, selectedSize])

  return (
    <div className='product-page overflow-hidden'>
      <ProductBreadCrumb product={product} />
      <div className='container'>
        <div className='row mt-5'>
          <ProductSlider selectedColor={selectedColor} product={product} />
          <ProductDetails
            productRating={productRating}
            totalReviewCount={totalReviewCount}
            id={id}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            product={product}
          />
        </div>
        <ProductDetailsTabs
          productReviews={productReviews}
          id={id}
          product={product}
        />
        <RelatedProducts />
      </div>
    </div>
  )
}

export default ProductPage
