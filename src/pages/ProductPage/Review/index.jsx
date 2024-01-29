import { postReview } from 'features/slices/reviewSlice'
import { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

const Review = ({ productReviews, id }) => {
  const dispatch = useDispatch()
  const userId = localStorage.getItem('userId')
  const [user, setUser] = useState({
    productId: id,
    appUserId: userId,
    rate: 0,
    text: '',
  })

  useEffect(() => {}, [user])

  const handleChange = (event) => {
    setUser((prevUser) => ({
      ...prevUser,
      text: event.target.value,
    }))
  }

  const handlePostReview = (e) => {
    try {
      e.preventDefault()
      dispatch(postReview(user))
    } catch (err) {
      console.error('Error posting review:', err)
    }
  }

  const handleStarClick = (selectedRate) => {
    setUser((prevUser) => ({
      ...prevUser,
      rate: selectedRate,
    }))
  }

  return (
    <div className='reviews'>
      <form className='review-input' onSubmit={(e) => handlePostReview(e)}>
        <label>New Comment</label>
        <div className='star d-flex align-items-center'>
          {[1, 2, 3, 4, 5].map((rating) => (
            <FaStar
              key={rating}
              onClick={() => handleStarClick(rating)}
              style={{
                color: rating <= user.rate ? 'orange' : 'gray',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
        <textarea
          onChange={handleChange}
          value={user.text}
          name='comment'
          id='review'
          cols='20'
          rows='5'
          placeholder='Write your comment ...'
        ></textarea>
        <button type='submit'>Post Review</button>
      </form>
      {productReviews &&
        productReviews.map((review) => (
          <div key={review.id} className='review'>
            <h4 className='user'> user {review.appUserId}</h4>
            <p className='review-text'>{review.text}</p>
            <ul className='d-flex rate-date'>
              <li>{review.rate} rate</li>
              <li>{review.createdAt}</li>
            </ul>
          </div>
        ))}
    </div>
  )
}

export default Review
