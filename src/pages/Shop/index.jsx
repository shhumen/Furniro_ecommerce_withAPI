import React, { useEffect } from 'react'
import { Filter, ShopProducts } from 'pages'
import { Header, Pagination, Services } from 'components'
import { shopImg1 } from 'assets/scripts'
import { useState } from 'react'
import {
  getAllCategories,
  getAllColors,
  getAllSizes,
  getAllTags,
} from 'features/slices/shopSlice'
import { useDispatch, useSelector } from 'react-redux'

const Shop = () => {
  const dispatch = useDispatch()
  const storedGridBtn = localStorage.getItem('gridBtn')
  const [gridBtn, setGridBtn] = useState(
    storedGridBtn === 'false' ? false : true
  )
  const [show, setShow] = useState(0)
  const [sortBy, setSortBy] = useState('')
  const [size, setSize] = useState([])
  const [color, setColor] = useState([])
  const [category, setCategory] = useState([])
  const [tags, setTags] = useState([])
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)
  const { totalProductCount, filteredProducts } = useSelector(
    (state) => state.shop
  )
  const prices = filteredProducts?.map((product) => product?.discountedPrice)

  useEffect(() => {
    dispatch(getAllSizes())
    dispatch(getAllColors())
    dispatch(getAllTags())
    dispatch(getAllCategories())
  }, [])

  useEffect(() => {
    localStorage.setItem('gridBtn', gridBtn.toString())
  }, [gridBtn])

  return (
    <div className='shop'>
      <Header title='Shop' img={shopImg1} />
      <Filter
        prices={prices}
        show={show}
        setTags={setTags}
        setShow={setShow}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        setSize={setSize}
        setColor={setColor}
        setCategory={setCategory}
        setSortBy={setSortBy}
        setGridBtn={setGridBtn}
      />
      <ShopProducts
        show={show}
        filteredProducts={filteredProducts}
        minPrice={minPrice}
        maxPrice={maxPrice}
        size={size}
        color={color}
        category={category}
        sortBy={sortBy}
        gridBtn={gridBtn}
      />
      <Services />
    </div>
  )
}

export default Shop
