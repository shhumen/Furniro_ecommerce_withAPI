import React, { useState } from 'react'
import { sofa_cloud_1, sofa_cloud_2 } from 'assets/scripts'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getByIdDescription } from 'features/slices/productDetailsSlice'
import { useParams } from 'react-router-dom'
import Review from '../Review'

const ProductDetailsTabs = ({ product, id, productReviews }) => {
  const [selectedTab, setSelectedTab] = useState(1)
  const desc = useSelector((state) => state.productDetails?.productDetailsDesc)
  const dispatch = useDispatch()

  const toggleTabs = (index) => {
    setSelectedTab(index)
  }

  useEffect(() => {
    if (id) {
      dispatch(getByIdDescription(id))
    }
  }, [dispatch, id])

  return (
    <div className='container'>
      <div className='row p-5 mt-5 tabs'>
        <div className='d-flex justify-content-center '>
          <p
            className='m-3'
            onClick={() => toggleTabs(1)}
            role='button'
            style={selectedTab === 1 ? { color: '#000' } : { color: '#9F9F9F' }}
          >
            Description
          </p>
          <p
            className='m-3'
            onClick={() => toggleTabs(2)}
            role='button'
            style={selectedTab === 2 ? { color: '#000' } : { color: '#9F9F9F' }}
          >
            Additional Information
          </p>
          <p
            className='m-3'
            onClick={() => toggleTabs(3)}
            role='button'
            style={selectedTab === 3 ? { color: '#000' } : { color: '#9F9F9F' }}
          >
            Reviews [5]
          </p>
        </div>
        <div
          className={`${
            selectedTab === 1 ? 'block active' : 'hidden'
          } detail-tab`}
        >
          <p>{desc?.introduction}</p>

          <div className='row'>
            {desc?.imageFiles?.map((image, index) => (
              <div
                key={index}
                className='col col-lg-6 col-md-6 col-sm-12 col-12 desc-img d-flex justify-content-between mt-4'
              >
                <img src={image} alt='product=-desc-img' />
              </div>
            ))}
          </div>
        </div>
        <div className={`${selectedTab === 2 ? 'block' : 'hidden'} detail-tab`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            asperiores autem blanditiis consequatur corporis, eius esse
            inventore iste iusto maiores molestiae mollitia obcaecati, officiis
            optio quia quos sapiente, tempora tenetur.
          </p>
        </div>
        <div
          className={`${selectedTab === 3 ? 'block ' : 'hidden'} detail-tab`}
        >
          <Review id={id} productReviews={productReviews} product={product} />
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsTabs
