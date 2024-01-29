import { createSlice } from '@reduxjs/toolkit'
import { fetchHomeGrids } from 'features/actions/actions'

const initialState = {
  homeGrids: [],
  status: null,
  error: null,
}

const homeGridsSlice = createSlice({
  name: 'homeGrids',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHomeGrids.pending, (state) => {
        state.status = 'pending'
        state.error = null
      })
      .addCase(fetchHomeGrids.fulfilled, (state, action) => {
        state.status = 'success'
        state.homeGrids = action.payload
        state.error = null
      })
      .addCase(fetchHomeGrids.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action?.error?.message
      })
  },
})

export default homeGridsSlice.reducer
