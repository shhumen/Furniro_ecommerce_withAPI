import Slider from 'react-slick'
import { sliderCards } from 'constants/index'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useState } from 'react'
import { right_arrow } from 'assets/scripts'

function Inspiration() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [LastSlide, setLastSlide] = useState(0)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    beforeChange: (prevId, newId) => {
      setCurrentSlide(newId)
      setLastSlide(prevId)
    },
  }

  return (
    <div className=' container-fluid inspiration'>
      <div className='row'>
        <div className='col-12 col-lg-5 col-md-5 col-sm-5 inspos'>
          <div className='title'>
            <h2>50+ Beautiful rooms inspiration</h2>
          </div>
          <div className='desc'>
            <span>
              Our designer already made a lot of beautiful <br /> prototype of
              rooms that inspire you
            </span>
          </div>
          <div className='inspo-btn'>
            <button>Explore More</button>
          </div>
        </div>
        <div className='col-12 col-lg-7 col-md-7 col-sm-7 d-flex justify-content-center'>
          <div className='slider '>
            <Slider className='' {...settings}>
              {sliderCards.map((item, id_) => (
                <div className='slide' key={item.id}>
                  <img
                    src={item.img}
                    alt={`Slide ${item.id}`}
                    className='sliderImg'
                    style={{
                      overflow: 'hidden',
                      height: currentSlide === id_ ? '582px' : '486px',
                    }}
                  />
                  {currentSlide === id_ && (
                    <div className='slide-about'>
                      <div>
                        <span className='name'>
                          0{item.id} - {item.title}
                        </span>
                        <span className=''> {item.subTitle}</span>
                      </div>
                      <button>{/* <img src={right_arrow} alt='' /> */}</button>
                    </div>
                  )}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inspiration
