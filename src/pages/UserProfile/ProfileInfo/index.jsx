import { updateUser } from 'features/slices/authSlice'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ProfileInformation = ({ selectedTab }) => {
  const userId = localStorage.getItem('userId')
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    userName: user?.userName || '',
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
  })

  useEffect(() => {
    if (user && userId) {
      setFormData({
        userName: user.userName || '',
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
      })
    }
  }, [user, userId])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    dispatch(updateUser({ ...formData, userId }))
  }

  return (
    <div
      className={`${selectedTab === 1 ? 'block active' : 'hidden'} detail-tab`}
    >
      <h6>YOUR PROFILE INFORMATION</h6>
      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <label for='userName'>User Name</label>
          <input
            type='text'
            className='form-control'
            id='userName'
            placeholder='Enter your username'
            value={formData.userName}
            onChange={handleInputChange}
          />
          <label for='firstName'>First Name</label>
          <input
            type='text'
            className='form-control'
            id='firstName'
            placeholder='Enter your firstname'
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <label for='lastName'>Last Name</label>
          <input
            type='text'
            className='form-control'
            id='lastName'
            placeholder='Enter your lastname'
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <label for='email'>Email</label>
          <input
            type='text'
            className='form-control'
            id='email'
            placeholder='Enter your email'
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <button type='submit' className='btn btn-dark'>
          Update Profile
        </button>
        <button type='reset' className='btn btn-dark'>
          Reset Changes
        </button>
      </form>
    </div>
  )
}
export default ProfileInformation
