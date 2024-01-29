import React from 'react'
import FavProducts from './FavProducts'
import { useSelector } from 'react-redux'
import { Header } from '../../components'
import { blogImg } from '../../assets/scripts'

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishList.wishListItems)

  return (
    <div className='wishlist'>
      <Header title='Wishlist' img={blogImg} />
      {wishlist.length === 0 ? (
        <>
          <p>Wishlist is empty</p>
        </>
      ) : (
        <FavProducts />
      )}
    </div>
  )
}

export default Wishlist
