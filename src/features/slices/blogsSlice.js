import { createSlice } from '@reduxjs/toolkit'
import {
  fetchBlogs,
  fetchRecentBlogs,
  fetchBlogCategories,
} from 'features/actions/actions'

const initialState = {
  recentBlogs: [],
  blogs: [],
  blogCategories: [],
  status: null,
  loading: false,
}

const blogsSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Blogs
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true
        state.status = 'pending'
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false
        state.blogs = action?.payload
        state.status = 'fulfilled'
      })
      .addCase(fetchBlogs.rejected, (state) => {
        state.loading = true
        state.status = 'rejected'
      })

      //  Recent Blogs

      .addCase(fetchRecentBlogs.pending, (state) => {
        state.loading = true
        state.status = 'pending'
      })
      .addCase(fetchRecentBlogs.fulfilled, (state, action) => {
        state.loading = false
        state.recentBlogs = action?.payload
        state.status = 'fulfilled'
      })
      .addCase(fetchRecentBlogs.rejected, (state) => {
        state.loading = true
        state.status = 'rejected'
      })

      // Categories

      .addCase(fetchBlogCategories.pending, (state) => {
        state.loading = true
        state.status = 'pending'
      })
      .addCase(fetchBlogCategories.fulfilled, (state, action) => {
        state.loading = false
        state.blogCategories = action?.payload
        state.status = 'fulfilled'
      })
      .addCase(fetchBlogCategories.rejected, (state) => {
        state.loading = true
        state.status = 'rejected'
      })
  },
})

export default blogsSlice.reducer
