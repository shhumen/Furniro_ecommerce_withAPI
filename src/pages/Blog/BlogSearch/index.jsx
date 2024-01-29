import { useState } from 'react'
import { Link } from 'react-router-dom'
import { search } from 'assets/scripts'

const BlogSearch = ({ blogs }) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <div className='blog-search mt-4'>
        <input
          type='text'
          placeholder='Search blogs...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={search} alt='search icon' />
      </div>
    </>
  )
}

export default BlogSearch
