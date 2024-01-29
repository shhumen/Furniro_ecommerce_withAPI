import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHomeGrids } from '../../../features/actions/actions'

const Grid = () => {
  const dispatch = useDispatch()
  const grids = useSelector((state) => state.homeGrids?.homeGrids)
  const status = useSelector((state) => state.homeGrids?.status)

  useEffect(() => {
    dispatch(fetchHomeGrids())
  }, [dispatch])

  return (
    <div className='grid'>
      <div className='text-center grid-header'>
        <p>Share your setup with</p>
        <h2>#FuniroFurniture</h2>
      </div>
      {status === 'success' ? (
        <div className='grid-wrapper'>
          <div className='gridClass gap-4 container-fluid'>
            {!grids ? (
              <div>Loading</div>
            ) : (
              grids &&
              grids?.map(({ id, imageUrls }) => (
                <img key={id} src={imageUrls?.[0]} alt='grid-img' />
              ))
            )}
          </div>
        </div>
      ) : (
        'Loading'
      )}
    </div>
  )
}

export default Grid
