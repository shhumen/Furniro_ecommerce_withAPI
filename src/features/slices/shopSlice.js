import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const base_URL = process.env.REACT_APP_BASE_URL

const initialState = {
  loading: false,
  status: '',
  totalProductCount: 0,
  filteredProducts: [],
  sizes: [],
  colors: [],
  categories: [],
  tags: [],
}

export const getFilteredProducts = createAsyncThunk(
  'shop/getFilteredProducts',
  async ({
    productSizes = [],
    productColors = [],
    productTags = [],
    categoryName = [],
    page,
    take,
    maxPrice = 0,
    minPrice = 0,
    orderBy = '',
  }) => {
    try {
      let url = `UserProduct/Products?Page=${page}`
      if (take > 0) {
        url += `&ShowMore.Take=${take}`
      }
      if (categoryName?.length > 0) {
        url += categoryName
          ?.map((cateory) => `&CategoryNames=${cateory.value}`)
          .join('')
      }
      if (productTags?.length > 0) {
        url += productTags?.map((tag) => `&ProductTags=${tag.value}`).join('')
      }
      if (productSizes?.length > 0) {
        url += productSizes
          ?.map((size) => `&ProductSizes=${size.value}`)
          .join('')
      }
      if (productColors?.length > 0) {
        url += productColors
          ?.map((color) => `&ProductColors=${color.replace(/#/g, '%23')}`)
          .join('')
      }
      if (minPrice > 0) {
        url += `&MinPrice=${minPrice}`
      }
      if (maxPrice > 0) {
        url += `&MaxPrice=${maxPrice}`
      }
      if (orderBy.length > 0) {
        url += `&OrderBy=${orderBy}`
      }

      const response = await axios.get(`
      ${base_URL}${url}`)
      return await response.data
    } catch (error) {
      return error
    }
  }
)

export const getAllSizes = createAsyncThunk('shop/getAllSizes', async () => {
  try {
    const response = await axios.get(`${base_URL}Size/getAll`)
    return await response.data
  } catch (error) {
    return error
  }
})

export const getAllColors = createAsyncThunk('shop/getAllColors', async () => {
  try {
    const response = await axios.get(`${base_URL}Color/getAll`)
    return await response.data
  } catch (error) {
    return error
  }
})

export const getAllTags = createAsyncThunk('shop/getAllTags', async () => {
  try {
    const response = await axios.get(`${base_URL}Tag/getAll`)
    return await response.data
  } catch (error) {
    return error
  }
})

export const getAllCategories = createAsyncThunk(
  'shop/getAllCategories',
  async () => {
    const response = await axios.get(`${base_URL}Category/getAll`)
    return await response.data
  }
)

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getFilteredProducts.pending, (state) => {
        state.loading = true
        state.status = 'pending'
      })
      .addCase(getFilteredProducts.fulfilled, (state, action) => {
        state.loading = false
        if (action.payload) {
          state.filteredProducts = action.payload?.[0].products
          state.totalProductCount = action.payload?.[0].totalProductCount
        }
        state.status = 'fulfilled'
      })
      .addCase(getFilteredProducts.rejected, (state) => {
        state.loading = true
        state.status = 'rejected'
      })
      .addCase(getAllSizes.pending, (state) => {
        state.loading = true
        state.status = 'pending'
      })
      .addCase(getAllSizes.fulfilled, (state, action) => {
        state.loading = false
        state.sizes = action.payload
        state.status = 'fulfilled'
      })
      .addCase(getAllSizes.rejected, (state) => {
        state.loading = true
        state.status = 'rejected'
      })
      .addCase(getAllColors.pending, (state) => {
        state.loading = true
        state.status = 'pending'
      })
      .addCase(getAllColors.fulfilled, (state, action) => {
        state.loading = false
        state.colors = action.payload
        state.status = 'fulfilled'
      })
      .addCase(getAllColors.rejected, (state) => {
        state.loading = true
        state.status = 'rejected'
      })
      .addCase(getAllTags.pending, (state) => {
        state.loading = true
        state.status = 'pending'
      })
      .addCase(getAllTags.fulfilled, (state, action) => {
        state.loading = false
        state.tags = action.payload
        state.status = 'fulfilled'
      })
      .addCase(getAllTags.rejected, (state) => {
        state.loading = true
        state.status = 'rejected'
      })
      .addCase(getAllCategories.pending, (state) => {
        state.loading = true
        state.status = 'pending'
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.loading = false
        state.categories = action.payload
        state.status = 'fulfilled'
      })
      .addCase(getAllCategories.rejected, (state) => {
        state.loading = true
        state.status = 'rejected'
      })
  },
})

export default shopSlice.reducer
