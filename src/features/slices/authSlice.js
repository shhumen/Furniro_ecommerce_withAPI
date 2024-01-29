import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { loginUser } from 'features/actions/actions'

const base_URL = process.env.REACT_APP_BASE_URL

const token = localStorage.getItem('token')

const initialState = {
  isSuccess: false,
  message: '',
  loading: false,
  user: null,
  error: null,
  userId: null,
  jwtToken: null,
  refreshToken: null,
  signIn: false,
  userName: '',
  firstName: '',
  lastName: '',
  email: '',
}

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${base_URL}ApplicationUser/UpdateUser`,
        user,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
            'Content-Type': 'application/json',
          },
        }
      )
      return response.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const getUserById = createAsyncThunk(
  'user/getUserById',
  async (userID) => {
    try {
      const response = await axios.get(`${base_URL}ApplicationUser/${userID}`)
      return response.data
    } catch (error) {
      return error
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSignIn(state, action) {
      state.signIn = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
        state.user = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.isSuccess = action.payload.isSuccess
        state.userId = action.payload.userId
        state.jwtToken = action.payload.jwtToken
        state.refreshToken = action.payload.refreshToken
        state.error = null
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = true
        state.user = null
        state.error = action.payload.error.message
      })
      .addCase(getUserById.pending, (state) => {
        state.loading = true
        state.error = null
        state.user = null
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.loading = false
        state.isSuccess = action.payload.isSuccess
        state.userName = action.payload.userName
        state.firstName = action.payload.firstName
        state.lastName = action.payload.lastName
        state.email = action.payload.email
        state.error = null
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.loading = true
        state.user = null
        state.error = action.payload.error.message
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true
        state.error = null
        state.user = null
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false
        state.isSuccess = action.payload.isSuccess
        state.userName = action.payload.userName
        state.firstName = action.payload.firstName
        state.lastName = action.payload.lastName
        state.email = action.payload.email
        state.error = null
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = true
        state.user = null
        state.error = action.payload.error.message
      })
  },
})

export const { setSignIn } = userSlice.actions

export default userSlice.reducer
