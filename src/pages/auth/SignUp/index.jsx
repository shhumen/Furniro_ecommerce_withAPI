import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { toast } from 'react-toastify'
import { registerUser } from 'features/actions/actions'
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa'
import { registerSchema } from 'components/Schemas'

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialValues = {
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }
  const handleRegisterEvent = (values, { resetForm, setSubmitting }) => {
    dispatch(registerUser(values))
      .then((response) => {
        if (response?.payload?.isSuccess) {
          toast.success('Successfully registered')
          if (response?.meta?.requestStatus === 'fulfilled') {
            resetForm()
            navigate('/login')
          } else {
            return null
          }
        }
      })
      .catch((error) => {
        toast.error('Fill all fields')
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  return (
    <div className='form-container sign-up-container'>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleRegisterEvent}
      >
        {({
          isSubmitting,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
        }) => (
          <Form className='form-group custom-form'>
            <h1>Sign Up</h1>
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
            <span>or use your email for registration</span>
            <Field
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.userName}
              placeholder='Username'
              id='userName'
              name='userName'
              className={touched.userName && errors.userName ? 'error' : ''}
            />
            <ErrorMessage
              name='userName'
              component='div'
              className='error-message'
            />

            <Field
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              placeholder='Firstname'
              id='firstName'
              name='firstName'
              className={touched.firstName && errors.firstName ? 'error' : ''}
            />
            <ErrorMessage
              name='firstName'
              component='p'
              className='error-message'
            />
            <Field
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              placeholder='Lastname'
              id='lastName'
              name='lastName'
              className={touched.lastName && errors.lastName ? 'error' : ''}
            />
            <ErrorMessage
              name='lastName'
              component='p'
              className='error-message'
            />
            <Field
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder='email'
              id='email'
              name='email'
              className={touched.email && errors.email ? 'error' : ''}
            />
            <ErrorMessage
              name='email'
              component='p'
              className='error-message'
            />
            <Field
              type='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder='Password'
              id='password'
              name='password'
              className={touched.password && errors.password ? 'error' : ''}
            />
            <ErrorMessage
              name='password'
              component='p'
              className='error-message'
            />
            <Link>Do you have account? Sign in</Link>
            <button disabled={isSubmitting}>Sign Up</button>
          </Form>
        )}
      </Formik>
      {/* <form>
        <h1>Sign Up</h1>
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
        <input type='text' placeholder='First Name' />
        <input type='text' placeholder='Last Name' />
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <Link to='/sign-up'>
          <button>Sign Up</button>
        </Link>
      </form> */}
    </div>
  )
}

export default SignUp
