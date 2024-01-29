import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchBlogCategories,
  fetchBlogs,
  fetchRecentBlogs,
} from 'features/actions/actions'
import { Header } from 'components'
import { Blogs, Categories, BlogSearch, RecentPosts } from 'pages'
import { blogImg } from 'assets/scripts'

const Blog = () => {
  const dispatch = useDispatch()
  const blogs = useSelector((state) => state.blogs?.blogs?.[0]?.blogs)
  const recent_blogs = useSelector((state) => state.blogs?.recentBlogs)
  const categories = useSelector((state) => state.blogs?.blogCategories)
  const [categoryId, setCategoryId] = useState('')

  useEffect(() => {
    dispatch(fetchBlogs({ page: 1, count: 4, categoryId: categoryId }))
    dispatch(fetchRecentBlogs())
    dispatch(fetchBlogCategories())
  }, [dispatch, categoryId])

  return (
    <>
      <div className='blog-header'>
        <Header title='Blog' img={blogImg} />
      </div>
      <div className='container blog'>
        <div className='row'>
          <Blogs blogs={blogs} />
          <div className='col col-lg-4 col-md-6 col-sm-12 col-12'>
            <BlogSearch blogs={blogs} />
            <Categories
              categories={categories}
              categoryId={categoryId}
              setCategoryId={setCategoryId}
            />
            <RecentPosts recent_blogs={recent_blogs} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
