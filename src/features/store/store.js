import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productSlice from 'features/slices/productSlice'
import cartSlice from 'features/slices/cartSlice'
import productDetailsSlice from 'features/slices/productDetailsSlice'
import wishListSlice from 'features/slices/wishListSlice'
import homeGridsSlice from 'features/slices/homeGridsSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import blogsSlice from 'features/slices/blogsSlice'
import userSlice from 'features/slices/authSlice'
import OtpSlice from 'features/slices/forgotPassword'
import shopSlice from 'features/slices/shopSlice'
import reviewSlice from 'features/slices/reviewSlice'

const rootReducer = combineReducers({
  products: productSlice,
  cart: cartSlice,
  productDetails: productDetailsSlice,
  wishList: wishListSlice,
  homeGrids: homeGridsSlice,
  blogs: blogsSlice,
  user: userSlice,
  otp: OtpSlice,
  shop: shopSlice,
  review: reviewSlice,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'wishList', 'shop'],
  blacklist: ['homeGrids'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)
