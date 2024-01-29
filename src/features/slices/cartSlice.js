import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  cartItems: [],
  cartTotalQty: 0,
  cartTotalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      // const { sizes, tags, colors, ...rest } = action.payload
      const { size, color, quantity } = action.payload
      const itemIndex = state.cartItems.findIndex(
        (item) =>
          item.id === action.payload?.id &&
          item.quantity === action.payload.quantity &&
          item.size === action.payload.size &&
          item.color === action.payload.color
      )
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQty += 1
        toast.info(
          `increased ${state.cartItems[itemIndex].name} ${state.cartItems[itemIndex].color} cart quantity`,
          {
            position: 'bottom-right',
            autoClose: 2000,
            theme: 'light',
          }
        )
      } else {
        state.cartItems.push({
          ...action.payload,
          size,
          color,
          quantity,
          cartQty: 1,
        })

        toast.success(`${action.payload?.name} added to cart`, {
          position: 'bottom-right',
          autoClose: 2000,
          theme: 'light',
        })
      }
    },
    decreaseCart(state, action) {
      const { size, color } = action.payload
      const indexOfItem = state.cartItems.findIndex(
        (item) =>
          item.id === action.payload?.id &&
          item.sizes === size &&
          item.colors === color
      )
      if (state.cartItems[indexOfItem].cartQty > 1) {
        state.cartItems[indexOfItem].cartQty -= 1
        toast.info(`Decreased ${action.payload.name} cart quantity`, {
          position: 'bottom-right',
          autoClose: 2000,
          theme: 'light',
        })
      } else if (state.cartItems[indexOfItem].cartQty <= 0) {
        return 1
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        )
        toast.error(`${action.payload.name} removed from cart`, {
          position: 'bottom-right',
          autoClose: 2000,
          theme: 'light',
        })
      }
    },

    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      )
    },
    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const price = cartItem.price
          const cartQty = cartItem.cartQty
          const itemTotal = price * cartQty

          cartTotal.total += itemTotal
          cartTotal.quantity += cartQty
          return cartTotal
        },
        {
          total: 0,
          quantity: 0,
        }
      )
      state.cartTotalAmount = total
      state.cartTotalQty = quantity
    },
  },
})

export const { addToCart, removeFromCart, getTotals, decreaseCart } =
  cartSlice.actions

export default cartSlice.reducer
