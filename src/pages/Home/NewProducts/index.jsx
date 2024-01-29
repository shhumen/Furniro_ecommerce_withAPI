import { SingleProductCard } from 'components'
import { fetchProducts } from 'features/actions/actions'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const NewProducts = () => {
  const newProducts = useSelector((state) => state.products?.items) ?? []
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts({ pages: 1, isNew: true }))
  }, [dispatch])

  return (
    <div className='new-products products container'>
      <div className='title text-center mb-4'>
        <h2>New Products</h2>
      </div>
      <div className='row'>
        {newProducts.map((newProduct) => {
          return (
            <div
              key={newProduct.id}
              className=' mb-4 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12'
            >
              {!newProduct?.isNew && newProduct.discountPercent === 0 ? (
                ''
              ) : (
                <SingleProductCard product={newProduct} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NewProducts
