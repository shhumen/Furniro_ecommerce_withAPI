import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const base_URL = process.env.REACT_APP_BASE_URL

const initialState = {
  isSuccess: false,
  message: '',
}

export const sendOTPEmail = createAsyncThunk('user/otp', async (values) => {
  try {
    const request = await axios.post(
      `${base_URL}ForgotPassword/SendOTPEmail`,
      values
    )
    const response = request
    return response
  } catch (error) {
    return error
  }
})

export const confirmationOTP = createAsyncThunk(
  'user/otpConfirmation',
  async (values, { rejectWithValue }) => {
    try {
      const request = await axios.post(
        `${base_URL}ForgotPassword/OtpConfirmation`,
        values
      )
      const response = request
      return response
    } catch (error) {
      return rejectWithValue(error.response.data.Message)
    }
  }
)

export const resetPassword = createAsyncThunk(
  'user/resetPassword',
  async (values, { rejectWithValue }) => {
    try {
      const request = await axios.post(
        `${base_URL}ForgotPassword/ResetPassword`,
        values
      )
      const response = request
      return response
    } catch (error) {
      return rejectWithValue(error.response.data.Message)
    }
  }
)

const otpSlice = createSlice({
  name: 'otp',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(sendOTPEmail.pending, (state) => {
        state.isSuccess = false
      })
      .addCase(sendOTPEmail.fulfilled, (state, action) => {
        state.isSuccess = true
        state.message = action.payload.message
      })
      .addCase(sendOTPEmail.rejected, (state) => {
        state.isSuccess = false
      })
      // confirmation
      .addCase(confirmationOTP.pending, (state) => {
        state.isSuccess = false
      })
      .addCase(confirmationOTP.fulfilled, (state, action) => {
        state.isSuccess = true
        state.message = action.payload
      })
      .addCase(confirmationOTP.rejected, (state) => {
        state.isSuccess = false
      })
      // reset password
      .addCase(resetPassword.pending, (state) => {
        state.isSuccess = false
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isSuccess = true
        state.message = action.payload.message
      })
      .addCase(resetPassword.rejected, (state) => {
        state.isSuccess = false
      })
  },
})

export default otpSlice.reducer
