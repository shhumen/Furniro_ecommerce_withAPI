import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Field, Formik, Form, ErrorMessage } from 'formik'
import { loginUser } from 'features/actions/actions'
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { loginSchema } from 'components/Schemas'

const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLoginEvent = (values, { setSubmitting }) => {
    dispatch(loginUser(values))
      .then((response) => {
        if (response?.payload?.isSuccess) {
          toast.success('Successfully loged in')
          if (response?.meta?.requestStatus === 'fulfilled') {
            navigate('/')
          }
        } else {
          return null
        }
      })
      .catch((error) => {
        toast.error('Invalid username or password')
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  const initialValues = {
    userName: '',
    password: '',
  }
  return (
    <div className='form-container sign-in-container'>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleLoginEvent}
      >
        {({ isSubmitting, handleChange, handleBlur, values }) => (
          <Form className='form-group custom-form'>
            <h1>Sign In</h1>
            <div className='social-container'>
              <Link className='social'>
                <FaFacebookF />
              </Link>
              <Link className='social'>
                <FaGooglePlusG />
              </Link>
              <Link className='social'>
                <FaLinkedinIn />
              </Link>
            </div>
            <span>or use your username </span>
            <Field
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.userName}
              placeholder='Username'
              id='userName'
              name='userName'
            />
            <ErrorMessage name='userName' component='p' />
            <Field
              type='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder='Password'
              id='password'
              name='password'
            />
            <ErrorMessage name='password' component='p' />

            <Link to='/forgot-password'>Forgot your password?</Link>
            <button disabled={isSubmitting}>Sign In</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default SignIn
