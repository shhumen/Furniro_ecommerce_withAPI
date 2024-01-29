import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const base_URL = process.env.REACT_APP_BASE_URL

export const setSelectedCategory = createAction('blog/setSelectedCategory')

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ pages, count, isNew }) => {
    try {
      const response = await axios.get(
        `${base_URL}UserProduct/Products?Page=${pages}${
          count ? `&ShowMore.Take=${count}` : ''
        }${isNew ? `&IsNew=${isNew}` : ''}`
      )
      if (response.status !== 200) {
        return []
      }
      return response.data
    } catch (error) {
      return error
    }
  }
)

export const fetchHomeGrids = createAsyncThunk('fetchHomeCards', async () => {
  try {
    const response = await axios.get(`${base_URL}Home`)
    return response.data
  } catch (err) {
    return err
  }
})

export const fetchProductsById = createAsyncThunk(
  'products/fetchProductsById',
  async ({ productID, sizeID }) => {
    try {
      const response = await axios.get(
        `${base_URL}UserProduct/getById/ProductPage?Id=${productID}${
          sizeID ? `&SizeId=${sizeID}` : ''
        }`
      )
      return response.data
    } catch (error) {
      return error
    }
  }
)

// Blog page

export const fetchBlogs = createAsyncThunk(
  'blog/fetchBlogs',
  async ({ page, count, categoryId }) => {
    try {
      const response = await axios.get(
        `${base_URL}Blog?Page=${page}&ShowMore.Take=${count}&CategoryId=${categoryId}`
      )
      return response.data
    } catch (error) {
      return error
    }
  }
)

export const fetchRecentBlogs = createAsyncThunk(
  'blog/fetchRecentPosts',
  async () => {
    try {
      const response = await axios.get(`${base_URL}Blog/recent-posts`)
      return response.data
    } catch (error) {
      return error
    }
  }
)

export const fetchBlogCategories = createAsyncThunk(
  'blog/fetchBlogCategories',
  async () => {
    try {
      const response = await axios.get(`${base_URL}Blog/blog-categories`)
      return response.data
    } catch (error) {
      return error
    }
  }
)

// auth

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const request = await axios.post(
        `${base_URL}ApplicationUser/Login`,
        userCredentials
      )
      const response = await request.data
      const jwtToken = response.jwtToken
      const userId = response.userId
      localStorage.setItem('token', JSON.stringify(jwtToken))
      localStorage.setItem('userId', JSON.stringify(userId))
      return response
    } catch (error) {
      return error
    }
  }
)

export const registerUser = createAsyncThunk(
  'user/register',
  async (userCredentials) => {
    try {
      const request = await axios.post(
        `${base_URL}ApplicationUser/CreateUser`,
        userCredentials
      )
      const response = await request.data
      return response
    } catch (error) {
      return error
    }
  }
)
