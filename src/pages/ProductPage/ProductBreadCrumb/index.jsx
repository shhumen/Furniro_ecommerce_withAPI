import { right_arrow } from 'assets/scripts'

const { Link } = require('react-router-dom')

const ProductBreadCrumb = ({ product }) => {
  return (
    <div className='breadcrumb'>
      <span className='d-flex align-items-center'>
        <Link to='/' className='home_s'>
          Home
        </Link>
        <span className='separator'>
          {' '}
          <img src={right_arrow} alt='right arrow' />{' '}
        </span>
        <Link className='home_s' to='/shop'>
          Shop
        </Link>
        <div className='line d-flex'> </div>
        <span>{product.title}</span>
      </span>
    </div>
  )
}

export default ProductBreadCrumb
