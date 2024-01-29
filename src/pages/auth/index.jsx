import { SignIn, SignUp, OverLay } from 'pages'
import { useSelector } from 'react-redux'

const Auth = () => {
  const { signIn } = useSelector((state) => state.user)

  return (
    <div className='login-container'>
      <div
        className={`container login ${signIn ? 'right-panel-active' : ''} `}
        id='container'
      >
        <SignUp />
        <SignIn />
        <OverLay />
      </div>
    </div>
  )
}

export default Auth
