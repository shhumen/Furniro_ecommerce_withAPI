import React from 'react'
import { cardsHome } from 'constants'

const Cards = () => {
  return (
    <div className='container cards'>
      <div className='row m-3'>
        <h2 className='title text-center'>Browse The Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </div>
      <div className='row justify-content-around mx-5'>
        {cardsHome?.map((item) => {
          return (
            <div
              key={item.id}
              className='card col-lg-4 col-md-4 col-sm-4 col-12'
            >
              <img src={item.img} alt='image1' />
              <p className='title'>{item.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Cards
