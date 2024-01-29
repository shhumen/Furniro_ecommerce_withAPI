import { useState } from 'react'
import { user, calendar, tag } from 'assets/scripts'

const Blogs = ({ blogs }) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <div className='col col-lg-8 col-md-6 col-sm-12 col-12'>
      {blogs?.map((blog) => {
        return (
          <div key={blog?.id} className='blog-content mb-4'>
            <div className='blog-img'>
              <img src={blog?.imageUrls[0]} alt='blog-img' />
            </div>
            <div className='blog-icons'>
              <span key={blog.adminInfo.id}>
                <img src={user} alt='user-icon' />
                {blog.adminInfo.roleName}
              </span>

              <span>
                <img src={calendar} alt='calendar-icon' /> {blog.createdDate}
              </span>
              <span key={blog.category.id}>
                <img src={tag} alt='tag-icon' />
                {blog.category.categoryName}
              </span>
            </div>
            <div className='blog-title'>
              <h4>{blog.header}</h4>
            </div>
            <div className='blog-desc'>
              {/* <p>{blog?.text}</p> */}
              <p>
                {readMore ? blog.text : `${blog.text.substring(0, 200)}...`}
                <button onClick={() => setReadMore(!readMore)}>
                  {readMore ? 'Show Less' : 'Read More'}
                </button>
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Blogs
