import React, { useState } from 'react'

const ProductSlider = ({ product, selectedColor }) => {
  const [currentImg, setCurrentImg] = useState(0)
  const changeImage = (index) => {
    setCurrentImg(index)
  }

  return (
    <div className='col col-lg-6 col-md-12 col-sm-12 col-12'>
      <div className='product-details-slider d-flex justify-content-center'>
        <div className='thumbnail-container mt-3'>
          {selectedColor
            ? selectedColor?.imageFiles?.map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail ${
                    index === currentImg ? 'active' : ''
                  }`}
                  onClick={() => changeImage(index)}
                >
                  <img src={image} alt={`Product ${index + 1}`} />
                </div>
              ))
            : product?.colors?.[0].imageFiles?.map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail ${
                    index === currentImg ? 'active' : ''
                  }`}
                  onClick={() => changeImage(index)}
                >
                  <img src={image} alt={`Product ${index + 1}`} />
                </div>
              ))}
        </div>
        <div className='main-image d-flex'>
          <img
            src={
              selectedColor
                ? selectedColor?.imageFiles[currentImg]
                : product?.colors?.[0].imageFiles[currentImg]
            }
            alt={`Product ${currentImg + 1}`}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductSlider
