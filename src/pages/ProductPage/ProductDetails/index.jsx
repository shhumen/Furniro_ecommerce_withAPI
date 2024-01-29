import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  getProductRating,
  getProductReviews,
} from 'features/slices/reviewSlice'
import { FaCheck, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
const ProductDetails = ({
  selectedSize,
  setSelectedSize,
  product,
  selectedColor,
  setSelectedColor,
  totalReviewCount,
  productRating,
  id,
}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductReviews({ productID: id, show: totalReviewCount }))
    dispatch(getProductRating(id))
  }, [dispatch, id, totalReviewCount])

  const handleSize = (size) => {
    setSelectedSize(size)
  }

  const handleColor = (color) => {
    setSelectedColor(color)
  }

  // const handleAddToCart = (product) => {
  //   dispatch(
  //     addToCart({
  //       ...product,
  //       size: selectedSize,
  //       color: selectedColor,
  //       quantity: quantity,
  //     })
  //   )
  // }
  // const handleQuantity = (e, quantity) => {
  //   e.preventDefault()
  //   setQuantity(quantity + 1)
  // }

  return (
    <div className='col col-lg-6 col-md-12 col-sm-12 col-12'>
      <div className='product-details mx-4 pb-5'>
        <div className='product-name'>
          <h4>{product?.title}</h4>
        </div>
        <div className='product-price'>
          <p>{product?.discountedPrice?.toFixed(2)} $</p>
        </div>
        <div className='reviews d-flex justify-content-start align-items-center mb-2'>
          <div className='star d-flex align-items-center'>
            <div className='ratings'>
              <div className='empty-stars'></div>
              <div
                className='full-stars'
                style={{ width: `${(100 * productRating) / 5}%` }}
              ></div>
            </div>
            <span className='mx-3'>{productRating}</span>
          </div>
          <div className='line d-flex'></div>
          <div className='comments'>
            <span>{totalReviewCount} Customer Review</span>
          </div>
        </div>
        <div className='desc mt-2'>
          <span>{product?.introduction}</span>
        </div>
        <div className='sizes'>
          <p>Size</p>
          <div className='d-flex'>
            {product?.sizes?.map((size) => {
              return (
                <button
                  key={size['id']}
                  className={`size text-center mt-2 
                    ${selectedSize === size?.id ? 'selected' : ''}
                      `}
                  onClick={() => handleSize(size.id)}
                >
                  {size['sizeName']}
                </button>
              )
            })}
          </div>
        </div>
        <div className='colors mb-4'>
          <p>Colors</p>
          <div className='d-flex'>
            {product?.colors?.map((color) => {
              return (
                <button
                  className={`${color} color  ${
                    selectedColor === color ? 'selected' : ''
                  }`}
                  onClick={() => handleColor(color)}
                  style={{ background: `${color['colorHexCode']}` }}
                  key={color['id']}
                >
                  {selectedColor === color ? <FaCheck /> : ''}
                </button>
              )
            })}
          </div>
        </div>
        <div className='add-to-cart mt-2 d-flex align-items-center'>
          <div className='buttons d-flex align-items-center justify-content-between'>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <div className='add-button'>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className='product-description mt-5 d-flex'>
        <div>
          <ul>
            <li>SKU</li>
            <li>Category</li>
            <li>Tags</li>
            <li>Share</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>{product.sku}</li>
            <li>{product?.category?.categoryName}</li>
            <li>
              {product?.tags?.map((tag) => {
                return <span key={tag['id']}> {tag['tagName']} &nbsp;</span>
              })}
            </li>
            <li className='d-flex align-items-center share-icons'>
              <div>
                <FaFacebook />
              </div>
              <div>
                <FaLinkedin />
              </div>
              <div>
                <AiFillTwitterCircle />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
