import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({
  totalPages,
  handlePageChange,
  currentPage,
  nextPage,
}) => {
  return (
    <div className='row'>
      <ul className='pagination justify-content-center'>
        {[...Array(totalPages + 1).keys()].slice(1).map((n, i) => (
          <li
            className={`page-item ${currentPage === n ? 'active' : ''}`}
            key={i}
          >
            <Link
              to='#'
              className='page-link'
              onClick={() => handlePageChange(n)}
            >
              {n}
            </Link>
          </li>
        ))}
        <li className='page-item'>
          <Link to='#' className='page-link ' onClick={nextPage}>
            Next
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
