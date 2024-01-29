import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from 'features/actions/actions'

const initialState = {
  currentPage: 1,
  items: [],
  totalCount: [],
  isNew: null,
  status: null,
  error: null,
}

const productSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    onClickCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'pending'
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'success'
        state.items = action.payload?.[0].products
        state.totalCount = action.payload?.[0].totalProductCount
        state.error = null
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.error.message
      })
  },
})

export const { onClickCurrentPage } = productSlice.actions
export default productSlice.reducer
