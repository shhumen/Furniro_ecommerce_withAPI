import { SingleProductCard } from 'components'
import { getRelatedProducts } from 'features/slices/productDetailsSlice'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const RelatedProducts = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [showMore, setShowMore] = useState(3)
  const relatedProducts = useSelector(
    (state) => state.productDetails?.relatedProducts
  )

  useEffect(() => {
    if (id) {
      dispatch(getRelatedProducts({ productID: id, show: showMore }))
    }
  }, [dispatch, id, showMore])

  return (
    <div className='related-products products container'>
      <h2 className='text-center mb-4'>Related Products</h2>
      <div className='row'>
        {relatedProducts?.map((product) => (
          <div
            key={product.id}
            className=' mb-4 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12'
          >
            <SingleProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
