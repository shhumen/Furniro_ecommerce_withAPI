import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wishListItems: [],
  wishListTotalQty: 0,
}

const wishListSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const currentProductIndex = state.wishListItems.find(
        (item) => item.id === action.payload.id
      )
      if (currentProductIndex >= 0) {
        state.wishListItems.qty += 1
      } else {
        state.wishListItems.push({ ...action.payload, qty: 1 })
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishListItems = state.wishListItems.filter(
        (item) => item.id !== action.payload.id
      )
    },
  },
})

export const { addToWishlist, removeFromWishlist } = wishListSlice.actions
export default wishListSlice.reducer
