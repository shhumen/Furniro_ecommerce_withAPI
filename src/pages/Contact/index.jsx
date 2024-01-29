import React from 'react'
import { Header, Services } from 'components'
import { blogImg, phone, location, work_time } from 'assets/scripts'

const Contact = () => {
  return (
    <div className='contact'>
      <Header title='Contact' img={blogImg} />
      <div className='container get-in-touch'>
        <div className='contact-header text-center m-auto mt-5 mb-5'>
          <h2>Get In Touch With Us</h2>
          <span>
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </span>
        </div>
        <div className='row m-auto p-5'>
          <div className='col col-lg-6 col-md-6 col-sm-12 col-12 order-last order-md-first'>
            <div className='d-flex contact-content'>
              <div>
                <img src={location} alt='location' />
              </div>
              <div>
                <h2>Address</h2>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div className='d-flex contact-content'>
              <div>
                <img src={phone} alt='phone' />
              </div>
              <div>
                <h2>Phone</h2>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className='d-flex contact-content'>
              <div>
                <img src={work_time} alt='work time' />
              </div>
              <div>
                <h2>Working Time</h2>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
          <div className='col col-lg-6 col-md-6 col-sm-12 col-12 order-first order-md-last mt-4'>
            <form>
              <div className='mb-5 inputs'>
                <label
                  htmlFor='exampleFormControlInput1'
                  className='form-label'
                >
                  Your Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleFormControlInput1'
                  placeholder='name'
                />
              </div>
              <div className='mb-5 inputs'>
                <label
                  htmlFor='exampleFormControlInput2'
                  className='form-label'
                >
                  Email address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleFormControlInput2'
                  placeholder='name@example.com'
                />
              </div>
              <div className='mb-5 inputs'>
                <label
                  htmlFor='exampleFormControlInput3'
                  className='form-label'
                >
                  Subject{' '}
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleFormControlInput3'
                  placeholder='This is an optional'
                />
              </div>
              <div className='mb-5 inputs'>
                <label
                  htmlFor='exampleFormControlTextarea1'
                  className='form-label'
                >
                  Message
                </label>
                <textarea
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                  placeholder='Hi! i’d like to ask about'
                ></textarea>
              </div>
              <div className='mb-5 inputs'>
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Services />
    </div>
  )
}

export default Contact
