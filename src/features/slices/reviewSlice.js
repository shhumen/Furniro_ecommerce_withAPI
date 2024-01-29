import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const base_URL = process.env.REACT_APP_BASE_URL
const token = localStorage.getItem('token')

const initialState = {
  status: null,
  loading: false,
  productRating: '',
  productReviews: [],
  totalReviewCount: 0,
  message: '',
}

export const getProductRating = createAsyncThunk(
  'review/getProductRating',
  async (productID) => {
    try {
      const response = await axios.get(
        `${base_URL}Review/ProductRating?ProductId=${productID}`
      )
      return response.data
    } catch (error) {
      return error
    }
  }
)

export const getProductReviews = createAsyncThunk(
  'review/getProductReviews',
  async ({ productID, show }) => {
    try {
      const response = await axios.get(
        `${base_URL}Review/ProductReviews?ProductId=${productID}&ShowMore.Take=${show}`
      )
      return response.data
    } catch (error) {
      return error
    }
  }
)

export const postReview = createAsyncThunk(
  'review/postReview',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${base_URL}Review`, user, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          'Content-Type': 'application/json',
        },
      })
      return response.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getProductRating.pending, (state) => {
        state.loading = true
        state.status = 'pending'
      })
      .addCase(getProductRating.fulfilled, (state, action) => {
        state.loading = false
        state.productRating = action.payload
        state.status = 'fulfilled'
      })
      .addCase(getProductRating.rejected, (state) => {
        state.loading = true
        state.status = 'rejected'
      })
      .addCase(getProductReviews.pending, (state) => {
        state.loading = true
        state.status = 'pending'
      })
      .addCase(getProductReviews.fulfilled, (state, action) => {
        state.loading = false
        state.productReviews = action.payload?.productReviews
        state.totalReviewCount = action.payload?.totalReviewCount
        state.status = 'fulfilled'
      })
      .addCase(getProductReviews.rejected, (state) => {
        state.loading = true
        state.status = 'rejected'
      })
      .addCase(postReview.pending, (state) => {
        state.loading = true
        state.status = 'pending'
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.status = 'fulfilled'
      })
      .addCase(postReview.rejected, (state) => {
        state.loading = true
        state.status = 'rejected'
      })
  },
})

export default reviewSlice.reducer
