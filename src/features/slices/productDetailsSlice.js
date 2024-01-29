import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchProductsById } from '../actions/actions'
import axios from 'axios'

const initialState = {
  productDetails: {},
  productDetailsDesc: [],
  relatedProducts: [],
  status: null,
  loading: false,
}

const base_URL = process.env.REACT_APP_BASE_URL

export const getByIdDescription = createAsyncThunk(
  'products/getByIdDescription',
  async (productID) => {
    try {
      const response = await axios.get(
        `${base_URL}UserProduct/getById/Description?Id=${productID}`
      )
      return response.data
    } catch (error) {
      return error
    }
  }
)

export const getRelatedProducts = createAsyncThunk(
  'products/getRelatedProducts',
  async ({ productID, show }) => {
    try {
      const response = await axios.get(
        `${base_URL}UserProduct/RelatedProducts?ShowMore.Take=${show}&MainProductId=${productID}
`
      )
      return response.data
    } catch (error) {
      return error
    }
  }
)

const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProductsById.pending, (state) => {
        state.loading = true
        state.status = 'pending'
      })
      .addCase(fetchProductsById.fulfilled, (state, action) => {
        state.loading = false
        state.productDetails = action?.payload
        state.status = 'success'
      })
      .addCase(fetchProductsById.rejected, (state) => {
        state.loading = true
        state.status = 'rejected'
      })
      .addCase(getByIdDescription.pending, (state) => {
        state.loading = true
        state.status = 'pending'
      })
      .addCase(getByIdDescription.fulfilled, (state, action) => {
        state.loading = false
        state.productDetailsDesc = action?.payload
        state.status = 'success'
      })
      .addCase(getByIdDescription.rejected, (state) => {
        state.loading = true
        state.status = 'rejected'
      })
      .addCase(getRelatedProducts.pending, (state) => {
        state.loading = true
        state.status = 'pending'
      })
      .addCase(getRelatedProducts.fulfilled, (state, action) => {
        state.loading = false
        state.relatedProducts = action?.payload
        state.status = 'success'
      })
      .addCase(getRelatedProducts.rejected, (state) => {
        state.loading = true
        state.status = 'rejected'
      })
  },
})

export default productDetailsSlice.reducer
