import React from 'react'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  let navigate = useNavigate()
  const routeChange = () => {
    let path = `newProducts`
    navigate(path)
  }
  return (
    <div className='wrapper'>
      <div className='banner'>
        <div className='container d-flex justify-content-end'>
          <div className='layout '>
            <span>New Arrival</span>
            <h2>Discover Our New Collection</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
              mollitia!
            </p>
            <button onClick={routeChange}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
