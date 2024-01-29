import { Link } from 'react-router-dom'

const Categories = ({ categories, categoryId, setCategoryId }) => {
  const handleCategory = (id_) => {
    setCategoryId(id_)
    localStorage.setItem('selectedCategoryId', id_)
  }

  return (
    <div className='categories m-5'>
      <h2>Categories</h2>
      <div className='category-content'>
        <div className='row'>
          <ul>
            {categories?.map((category) => {
              return (
                <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                  <li>
                    <Link>
                      <p
                        onClick={(e) => handleCategory(category.id, e)}
                        className={`category ${
                          categoryId === category.id ? 'active' : ''
                        }`}
                      >
                        {category.categoryName}
                      </p>
                    </Link>
                    <p className='category' key={category.id}>
                      {category.blogCount}
                    </p>
                  </li>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Categories
