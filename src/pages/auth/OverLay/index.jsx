import { setSignIn } from 'features/slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const OverLay = () => {
  const { signIn } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const toggleSignIn = () => {
    dispatch(setSignIn(!signIn))
    navigate(signIn ? '/login' : '/register')
  }

  return (
    <div className='overlay-container'>
      <div className='overlay'>
        <div className='overlay-panel overlay-left'>
          <h1>Welcome Back!</h1>
          <p>To stay connected with us please login with your personal info</p>
          <button
            type='button'
            onClick={toggleSignIn}
            className='ghost'
            id='SignIn'
          >
            Sign In
          </button>
        </div>
        <div className='overlay-panel overlay-right'>
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start your journey with us </p>
          <button
            type='button'
            onClick={toggleSignIn}
            className='ghost'
            id='SignUp'
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default OverLay
